"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import NavbarButton from "../buttons/NavbarButton";

const DesktopNavbar: React.FC = () => {
  const [isSticky, setIsSticky] = useState(false);
  const navbarRef = useRef<HTMLDivElement>(null);
  const initialTopOffset = useRef(0);

  useEffect(() => {
    if (navbarRef.current) {
      initialTopOffset.current = navbarRef.current.offsetTop;
    }

    const onScroll = () => {
      setIsSticky(window.scrollY > initialTopOffset.current);
    };

    window.addEventListener("scroll", onScroll);
    onScroll(); // Run once on mount

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const navbarPosition = isSticky
    ? "fixed top-0 bg-component1/10 backdrop-blur-md shadow-md"
    : "absolute bottom-0";

  const navbarContainerStyle = isSticky
    ? "rounded-none bg-white/10 backdrop-blur-md shadow-md"
    : "rounded-md bg-component1 sm:w-[766px] md:w-[1380px] 3xl:w-[1750px]";

  return (
    <div
      ref={navbarRef}
      className={`hidden md:flex w-full h-[65px] 3xl:h-[90px] justify-center z-50 transition-all duration-200 ${navbarPosition}`}
    >
      <div
        className={`flex w-full h-full justify-center transition-all duration-200 ${navbarContainerStyle}`}
      >
        <div className="w-[417px] sm:w-[746px] md:w-[1280px] 3xl:w-[1650px] flex items-center justify-between relative">
          <Image
            src="/svg/JR Logo.svg"
            width={1000}
            height={1000}
            alt="JR Logo"
            className="w-[40px] md:w-[45px] 3xl:w-[55px]"
          />

          <ul className="text-text list-none hidden sm:flex lg:justify-center">
            {["home", "about", "craft", "career", "contact"].map((section) => (
              <li key={section}>
                <a
                  href={`#${section}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(section);
                  }}
                >
                  <NavbarButton text={section.toUpperCase()} />
                </a>
              </li>
            ))}
          </ul>

          {/* Optional Theme Toggle */}
          {/* <div className="block">
            <ThemeToggle />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default DesktopNavbar;
