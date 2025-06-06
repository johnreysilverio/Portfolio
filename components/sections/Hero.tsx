"use client";

import React from "react";
import MainButton from "../buttons/MainButton";
import CalendlyButton from "../buttons/CalendlyButton";
import IconButtons from "../buttons/IconButton";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import DesktopNavbar from "./DesktopNavbar";

const Hero = () => {
  return (
    <div
      id="home"
      className="relative bg-[url('/svg/bg-dark.svg')] bg-cover bg-center min-h-screen flex justify-center items-center px-10 md:pb-[50px] transition-all duration-200"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(0,0,0,0)_30%,rgba(0,0,0,0.6)_100%)] pointer-events-none z-0" />

      {/* Content */}
      <div className="w-[417px] sm:w-[746px] md:w-[1280px] 3xl:w-[1650px] h-full z-10 flex justify-center">
        <div className="w-full flex flex-col justify-center items-center gap-10 md:gap-15 3xl:gap-20">
          {/* Headline */}
          <div className="flex flex-col text-center">
            <p className="text-highlight text-[35px] sm:text-[75px] 3xl:text-[100px] font-bold leading-tight">
              Building the web,
              <br />
              one line of code at a time.
            </p>
            <p className="text-text text-[16px] sm:text-[24px] 3xl:text-[32px] mt-2">
              Turning ideas into experience and pixels into purpose.
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex w-full justify-center items-center gap-5">
            <a
              href="https://x.com/JReySilverio"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconButtons Icon={FaTwitter} />
            </a>
            <a
              href="https://github.com/johnreysilverio"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconButtons Icon={FaGithub} />
            </a>
            <a
              href="https://www.linkedin.com/in/jrsilverio17/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconButtons Icon={FaLinkedin} />
            </a>
          </div>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-5">
            <CalendlyButton text="Let's Work Together" />
            <a
              href="/files/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MainButton text="View Resume" />
            </a>
          </div>
        </div>
      </div>
      <DesktopNavbar />
    </div>
  );
};

export default Hero;
