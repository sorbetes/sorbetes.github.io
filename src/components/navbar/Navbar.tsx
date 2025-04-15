import React from "react";
import { useScrollContext } from "../ScrollContext";

interface NavbarProps {}
export const Navbar: React.FC<NavbarProps> = ({}) => {
  const { homeRef, experienceRef, contactRef } = useScrollContext();
  const handleScroll = (ref: any) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="hidden md:block fixed top-0 w-full h-[7vh] z-[10000] bg-[rgba(209, 217, 230, 0.5)] shadow-md backdrop-blur-xl">
      <div className="flex w-[80%] mx-auto h-full">
        <nav className="flex items-center justify-between w-full">
          <h1 className="flex-[0.6]"></h1>
          <div className="navbar-link" onClick={() => handleScroll(homeRef)}>
            Home
          </div>
          <div
            className="navbar-link"
            onClick={() => handleScroll(experienceRef)}
          >
            Experience
          </div>
          <div className="navbar-link" onClick={() => handleScroll(contactRef)}>
            Contact
          </div>
        </nav>
      </div>
    </div>
  );
};
