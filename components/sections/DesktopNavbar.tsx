"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import NavbarButton from "../buttons/NavbarButton";

const sections = ["home", "about", "craft", "career", "contact"];

const DesktopNavbar: React.FC = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const navbarRef = useRef<HTMLDivElement>(null);
  const initialTopOffset = useRef(0);

  useEffect(() => {
    if (navbarRef.current) {
      initialTopOffset.current = navbarRef.current.offsetTop;
    }

    const handleScroll = () => {
      setIsSticky(window.scrollY > initialTopOffset.current);

      // Find currently visible section
      let current = "home";
      for (const section of sections) {
        const elem = document.getElementById(section);
        if (elem) {
          const rect = elem.getBoundingClientRect();
          // Check if top of section is near the top of viewport
          if (
            rect.top <= window.innerHeight / 3 &&
            rect.bottom >= window.innerHeight / 3
          ) {
            current = section;
            break;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navbarPositionClass = isSticky
    ? "fixed top-0 bg-component1/10 backdrop-blur-md shadow-md"
    : "absolute bottom-0";

  const navbarContainerClass = isSticky
    ? "rounded-none bg-component1/50 backdrop-blur-md shadow-md"
    : "rounded-md bg-component1 sm:w-[766px] md:w-[1380px] 3xl:w-[1750px]";

  return (
    <div
      ref={navbarRef}
      className={`hidden md:flex w-full h-[65px] 3xl:h-[90px] justify-center z-[20] transition-all duration-200 ${navbarPositionClass}`}
    >
      <div
        className={`flex w-full h-full justify-center transition-all duration-200 ${navbarContainerClass}`}
      >
        <div className="w-[417px] sm:w-[746px] md:w-[1280px] 3xl:w-[1650px] flex items-center justify-between relative">
          <Image
            src="/svg/JR Logo.svg"
            alt="JR Logo"
            width={1000}
            height={1000}
            className="w-[40px] md:w-[45px] 3xl:w-[55px]"
          />

          <ul className="hidden sm:flex list-none text-text lg:justify-center gap-4">
            {sections.map((section) => (
              <li key={section}>
                <a
                  href={`#${section}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(section);
                  }}
                >
                  <NavbarButton
                    text={section.toUpperCase()}
                    isActive={activeSection === section}
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DesktopNavbar;
