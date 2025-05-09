"use client";

import React from "react";
import Image from "next/image";
import ButtonType1 from "../../components/buttons/ButtonType1";
import ButtonType3 from "../../components/buttons/ButtonType3";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <div
      className="dark:bg-[url('/png/bg/bg-small.png')] dark:2xl:bg-[url('/png/bg/bg-wide.png')] bg-cover bg-center min-h-screen flex justify-center items-center px-10 pt-[50px] transition-all duration-200"
      id="home"
    >
      <div className="w-[417px] sm:w-[746px] md:w-[1280px] 3xl:w-[1650px] h-full z-10 flex justify-center">
        <div className="grid grid-cols-2 gap-20 md:gap-5 w-full">
          <div className="w-full flex flex-col justify-center items-center gap-5 md:gap-10 col-span-2 md:col-span-1 md:items-start">
            <div className="flex flex-col text-center text-[32px] sm:text-[64px] font-bold md:text-left">
              <p className="text-text">
                HI, I’M <span className="text-highlight">JOHN REY</span> <br />A
                WEB DEVELOPER
              </p>
            </div>
            <div className="flex flex-col gap-5 md:gap-10">
              <div className="flex w-full justify-between items-center">
                <a href="https://x.com/JReySilverio" target="_blank">
                  <ButtonType3 Icon={FaTwitter} />
                </a>
                <a href="https://github.com/johnreysilverio" target="_blank">
                  <ButtonType3 Icon={FaGithub} />
                </a>
                <a
                  href="https://www.linkedin.com/in/jrsilverio17/"
                  target="_blank"
                >
                  <ButtonType3 Icon={FaLinkedin} />
                </a>
              </div>
              <a href="/others/downloadcv.pdf" target="_blank">
                <ButtonType1 text="Download CV" />
              </a>
            </div>
          </div>
          <div className="flex justify-center items-center col-span-2 md:col-span-1 ">
            <Image
              src="/svg/dark-mode/twitter-dark.svg"
              width={277}
              height={277}
              alt="JR Logo"
              className=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
