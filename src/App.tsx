import { Navbar } from "./components/navbar/Navbar";
import { Contact } from "./components/Contact";
import { useScrollContext } from "./components/ScrollContext";
import { AboutV2 } from "./components/experience/AboutV2";
import { HeroV2 } from "./components/HeroV2";
import WatercolorBackground from "./components/background/WatercolourBackground";

function App() {
  const { homeRef, experienceRef, contactRef } = useScrollContext();

  return (
    <div>
      {/*overflow-x-hidden --> to prevent horizontal scrolling*/}
      {/* font-primary --> this is coming from tailwind.config.js */}
      <WatercolorBackground />
      <div className="font-primary select-none">
        <Navbar />
        <div ref={homeRef} id="homeRef">
          <HeroV2 />
        </div>
        <div ref={experienceRef} id="aboutMeRef">
          <AboutV2 />
        </div>
        <div ref={contactRef} id="contactRef">
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
