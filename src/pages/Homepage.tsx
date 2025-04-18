import WatercolorBackground from "../components/background/WatercolourBackground";
import { Contact } from "../components/Contact";
import { AboutV2 } from "../components/experience/AboutV2";
import { HeroV2 } from "../components/HeroV2";
import { Navbar } from "../components/navbar/Navbar";
import { useScrollContext } from "../components/ScrollContext";

export default function HomePage() {
  const { homeRef, experienceRef, contactRef } = useScrollContext();

  return (
    <div>
      <WatercolorBackground />
      <div className="font-primary select-none">
        <Navbar />
        <div ref={homeRef} id="homeRef">
          <HeroV2 />
        </div>
        <div ref={experienceRef} id="experienceRef">
          <AboutV2 />
        </div>
        <div ref={contactRef} id="contactRef">
          <Contact />
        </div>
      </div>
    </div>
  );
}
