"use client";

import React from "react";
import MainButton from "../buttons/MainButton";
import AboutPicsAnimation from "../Animation/AboutPicsAnimation";

const About: React.FC = () => {
  const handleSmoothScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className="min-h-screen w-full bg-background2 flex justify-center items-center px-10 py-[40px] sm:py-[32.5px] 3xl:py-[45px] transition-all duration-200"
      id="about"
    >
      <div className="w-[417px] sm:w-[746px] md:w-[1280px] 3xl:w-[1650px] pt-15 grid grid-cols-2 md:gap-20 items-start justify-center">
        <div className="flex flex-col justify-center items-center text-center col-span-2 md:text-start md:items-start md:col-span-1 mb-10">
          <p className="text-highlight text-[40px] sm:text-[48px] font-bold">
            ABOUT ME
          </p>

          <p className="text-text text-[24px] sm:text-[36px] font-bold my-[33px] sm:mt-[33px] sm:mb-[18px]">
            <span className="text-highlight">&quot;</span>
            Building the web,
            <br />
            one line of code at a time.
            <span className="text-highlight">&quot;</span>
          </p>

          <p className="text-text text-[14px] sm:text-[16px] mb-[33px] sm:mb-[18px]">
            {
              "I'm a passionate Web Developer with a mission to create seamless and efficient digital experiences. With a strong foundation in coding and web technologies, I specialize in building responsive, user-friendly websites and web applications that are both functional and visually appealing."
            }
          </p>

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleSmoothScroll("contact");
            }}
          >
            <MainButton text="Contact Me" />
          </a>
        </div>

        <div className="relative col-span-2 md:col-span-1 aspect-[785/500] w-full flex justify-center items-center">
          <div className="absolute inset-0 overflow-hidden pl-10 pb-10">
            <div className="h-full w-full bg-highlight"></div>
          </div>
          <div className="absolute inset-0 overflow-hidden mt-10 mr-10">
            <AboutPicsAnimation />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
