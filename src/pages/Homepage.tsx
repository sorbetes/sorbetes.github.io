import { AboutMe } from "../components/about/AboutMe";
import { Contact } from "../components/contact/Contact";
import { Experience } from "../components/experience/Experience";
import { HeroV2 } from "../components/hero/HeroV2";
import { Navbar } from "../components/navbar/Navbar";
import { useScrollContext } from "../components/ScrollContext";

export default function HomePage() {
  const { homeRef, aboutMeRef, experienceRef, contactRef } = useScrollContext();

  return (
    <div>
      <div className="font-primary select-none">
        <Navbar />
        <div style={{ backgroundColor: "#f4f1ed" }} ref={homeRef} id="homeRef">
          <HeroV2 />
        </div>
        <div
          style={{ backgroundColor: "#d9aab2" }}
          ref={aboutMeRef}
          id="aboutMeRef"
        >
          <AboutMe />
        </div>
        <div
          style={{ backgroundColor: "#657084" }}
          ref={experienceRef}
          id="experienceRef"
        >
          <Experience />
        </div>
        <div
          style={{ backgroundColor: "#f4f1ed" }}
          ref={contactRef}
          id="contactRef"
        >
          <Contact />
        </div>
      </div>
    </div>
  );
}
