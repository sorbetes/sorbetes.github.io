import { useEffect, useRef, useState } from "react";
import { randomColor } from "../../utils/colorUtils";

const WatercolorBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let width = canvas.offsetWidth;
    let height = canvas.offsetHeight;
    canvas.width = width;
    canvas.height = height;

    const resizeCanvas = () => {
      const canvas = canvasRef.current;
      if (!canvas || !ctx) return;

      const rect = canvas.getBoundingClientRect();

      // Save existing content
      const oldWidth = canvas.width;
      const oldHeight = canvas.height;
      const imageData = ctx.getImageData(0, 0, oldWidth, oldHeight);

      // Match canvas resolution to CSS size
      canvas.width = rect.width;
      canvas.height = rect.height;

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.putImageData(imageData, 0, 0);

      width = rect.width;
      height = rect.height;
    };

    window.addEventListener("resize", resizeCanvas);

    // Watercolor effect functions
    const twoPI = 2 * Math.PI;

    function randomWiggle(wiggle: number) {
      return Math.random() * wiggle * (Math.random() < 0.5 ? -1 : 1);
    }

    class WaterColor {
      ctx: CanvasRenderingContext2D | null;
      size: number;
      x: number;
      y: number;
      fill: string;
      speed = 0.3;
      maxPoints = 3000;
      maxRender = 5;
      points: number[][] = [];
      originalPoints: number[][] = [];
      scale = true;
      c = 0;

      constructor(
        ctx: CanvasRenderingContext2D | null,
        x: number,
        y: number,
        size: number
      ) {
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.size = size;
        this.fill = randomColor();
        this.buildPoints();
        this.render();
      }

      buildPoints() {
        const wiggle = this.size * 0.15;
        let rotation = 0;
        let x = -this.size;
        let y = 0;
        const start = [x, y];

        this.points = [start];

        for (; rotation < twoPI; rotation += this.speed) {
          x +=
            this.size * this.speed * Math.sin(rotation) + randomWiggle(wiggle);
          y +=
            this.size * this.speed * Math.cos(rotation) + randomWiggle(wiggle);
          this.points.push([x, y]);
        }

        this.points.push(start);
        this.originalPoints = this.points;
      }

      expandPoints() {
        if (this.points.length > this.maxPoints) return false;

        const wiggle = this.size * 0.05;
        let p: number[][] = [];

        for (let i = 0; i < this.points.length - 1; i++) {
          let [x, y] = this.points[i];
          let [x2, y2] = this.points[i + 1];
          p.push(
            [x, y],
            [
              (x2 + x) / 2 + randomWiggle(wiggle),
              (y2 + y) / 2 + randomWiggle(wiggle),
            ],
            [x2, y2]
          );
        }

        this.points = p;
        return true;
      }

      render = () => {
        this.c++;
        if (this.c < this.maxRender * 3) requestAnimationFrame(this.render);
        if (this.c % 3 === 0) this.draw(this.c / 3);
      };

      draw(c: number) {
        if (!this.ctx) return;

        while (this.expandPoints()) {}

        const ctx = this.ctx;
        const itr = c / this.maxRender;

        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.globalCompositeOperation = "hard-light";
        ctx.globalAlpha = 0.25 - itr * 0.1;
        ctx.translate(this.x, this.y);
        if (this.scale) ctx.scale(1 + itr * 0.2, 1 + itr * 0.2);

        ctx.beginPath();
        ctx.moveTo(this.points[0][0], this.points[0][1]);

        for (let i = 0; i < this.points.length; i++) {
          ctx.lineTo(this.points[i][0], this.points[i][1]);
        }

        ctx.closePath();
        ctx.fillStyle = this.fill;
        ctx.fill();

        this.points = this.originalPoints;
      }
    }

    function makeWatercolor(e?: MouseEvent | TouchEvent) {
      const rect = canvasRef.current?.getBoundingClientRect();
      if (rect) {
        const x = e
          ? e instanceof MouseEvent
            ? e.clientX - rect.left
            : e.touches[0].clientX - rect.left
          : Math.random() * width;

        const y = e
          ? e instanceof MouseEvent
            ? e.clientY - rect.top
            : e.touches[0].clientY - rect.top
          : Math.random() * height;

        ctx?.setTransform(1, 0, 0, 1, 0, 0);
        ctx!.fillStyle = "#FFF";
        ctx!.globalAlpha = 0.02;
        ctx!.fillRect(0, 0, width, height);

        new WaterColor(
          ctx,
          x,
          y,
          Math.min(width, height) * (0.2 + Math.random() * 0.1)
        );
      }
    }

    function initializeWatercolor(e: MouseEvent | TouchEvent) {
      const target = e.target as HTMLElement;
      const validSection =
        target.closest("#herov2") || target.className === "navbar-link";

      if (!validSection) return;
      if (!initialized) {
        setInitialized(true);
      }
      makeWatercolor(e);
    }

    document.addEventListener("click", initializeWatercolor);
    document.addEventListener("touchstart", initializeWatercolor);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      document.removeEventListener("click", initializeWatercolor);
      document.removeEventListener("touchstart", initializeWatercolor);
    };
  }, [initialized]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full z-11"
    />
  );
};

export default WatercolorBackground;
