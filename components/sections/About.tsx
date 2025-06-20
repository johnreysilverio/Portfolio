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
      id="about"
      className="min-h-screen w-full bg-background2 flex justify-center items-center px-10 py-[40px] sm:py-[32.5px] 3xl:py-[45px] transition-all duration-200"
    >
      <div className="w-[417px] sm:w-[746px] md:w-[1280px] 3xl:w-[1650px] flex flex-col items-start justify-center">
        {/* Section Title */}
        <div className="mb-5 md:mb-10 w-full text-center">
          <p className="text-highlight text-[40px] sm:text-[48px] 3xl:text-[60px] font-bold">
            ABOUT ME
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-2 gap-5 w-full">
          {/* Left Text Section */}
          <div className="col-span-2 md:col-span-1 order-2 md:order-1 flex flex-col justify-center items-center text-center gap-5 md:gap-10 3xl:gap-15 mb-10">
            <p className="text-text text-[24px] sm:text-[32px] 3xl:text-[44px]">
              HI, I’M <span className="text-highlight">JOHN REY</span>, A WEB
              DEVELOPER
            </p>

            <p className="text-text text-[14px] sm:text-[18px] 3xl:text-[24px] text-justify">
              {`I'm a passionate Web Developer with a mission to create seamless
              and efficient digital experiences. With a strong foundation in
              coding and web technologies, I specialize in building responsive,
              user-friendly websites and web applications that are both
              functional and visually appealing.`}
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

          {/* Right Animation Section */}
          <div className="col-span-2 md:col-span-1 order-1 md:order-2 relative aspect-[785/500] w-full flex justify-center items-center">
            {/* Background Box */}
            <div className="absolute inset-0 overflow-hidden pl-5 pb-5 sm:pl-10 sm:pb-10">
              <div className="h-full w-full bg-highlight" />
            </div>

            {/* Animation Overlay */}
            <div className="absolute inset-0 overflow-hidden mt-5 mr-5 sm:mt-10 sm:mr-10">
              <AboutPicsAnimation />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
