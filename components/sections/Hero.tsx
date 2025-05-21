"use client";

import React from "react";
//import Image from "next/image";
import MainButton from "../buttons/MainButton";
import CalendlyButton from "../buttons/CalendlyButton";
import IconButtons from "../buttons/IconButton";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <div
      className="dark:bg-[url('/png/bg/bg-small.png')] dark:2xl:bg-[url('/png/bg/bg-wide.png')] bg-cover bg-center min-h-screen flex justify-center items-center px-10 md:pt-[50px] transition-all duration-200"
      id="home"
    >
      <div className="w-[417px] sm:w-[746px] md:w-[1280px] 3xl:w-[1650px] h-full z-10 flex justify-center">
        <div className="w-full flex flex-col justify-center items-center gap-10 md:gap-15 3xl:gap-20">
          <div className="flex flex-col text-center text-[35px] sm:text-[75px] 3xl:text-[100px]">
            <p className="text-highlight">
              Building the web,
              <br />
              one line of code at a time.
            </p>
          </div>
          <div className="flex w-full justify-center items-center gap-5">
            <a href="https://x.com/JReySilverio" target="_blank">
              <IconButtons Icon={FaTwitter} />
            </a>
            <a href="https://github.com/johnreysilverio" target="_blank">
              <IconButtons Icon={FaGithub} />
            </a>
            <a href="https://www.linkedin.com/in/jrsilverio17/" target="_blank">
              <IconButtons Icon={FaLinkedin} />
            </a>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center gap-5">
            <a>
              <CalendlyButton text="Let's Work Together" />
            </a>
            <a href="/others/downloadcv.pdf" target="_blank">
              <MainButton text="Download CV" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
