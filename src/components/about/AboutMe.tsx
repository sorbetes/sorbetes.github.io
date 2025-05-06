import { useState } from "react";
import { aboutMeBlurbs } from "../../data/aboutMeList";

export const AboutMe = () => {
  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? aboutMeBlurbs.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIndex((prev) => (prev === aboutMeBlurbs.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-[90%] md:w-[80%] h-[70vh] md:h-[100vh] mx-auto flex flex-col items-center justify-center relative text-center px-4 gap-[1rem] z-10">
      <div className="border border-black rounded-xl p-8 max-w-3xl bg-[#f4f1ed] shadow-md h-[400px] overflow-y-auto flex flex-col justify-center">
        <div className="space-y-4 leading-relaxed text-xs md:text-lg text-gray-800 transition-opacity duration-300">
          {aboutMeBlurbs[index].map((block, i) => (
            <p key={i}>{block}</p>
          ))}
        </div>
      </div>

      <div className="bottom-4 flex gap-4">
        <button
          onClick={handlePrev}
          className="px-4 py-2 rounded bg-transparent border border-transparent hover:border-black transition"
        >
          ←
        </button>
        <button
          onClick={handleNext}
          className="px-4 py-2 rounded bg-transparent border border-transparent hover:border-black transition"
        >
          →
        </button>
      </div>

      <div className="bottom-2 right-4 text-sm text-black">
        {index + 1} / {aboutMeBlurbs.length}
      </div>
    </div>
  );
};
