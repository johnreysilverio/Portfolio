import React from "react";
import { AiOutlineFacebook } from "react-icons/ai";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="w-full bg-[#1A1A1A] flex flex-col items-center justify-center">
      <a
        href="#home"
        className="hover:bg-[#3F3F3F] hover:bg-opacity-70 mt-[1rem] p-[1rem] rounded-xl transition-all"
      >
        <div className="flex flex-col justify-center items-center">
          <div className="flex justify-center items-end pt-[10px]">
            <p className="text-white text-6xl">--</p>
            <div className="flex flex-col relative justify-start items-center animate-bounce">
              <p className="absolute text-white text-2xl mt-[20px] ">^</p>
              <p className="text-white text-6xl">^</p>
            </div>
            <p className="text-white text-6xl">--</p>
          </div>
          <p className="text-2xl text-gray-200">Back to Top</p>
        </div>
      </a>
      <div className="flex mt-[10px] gap-5">
        <a
          href="https://www.facebook.com/john.rey.jose.silverio"
          target="_blank"
          className="cursor-pointer hover:bg-[#3F3F3F] hover:bg-opacity-70 rounded-md transition-all"
        >
          <AiOutlineFacebook className="text-white text-5xl" />
        </a>
        <a
          href="https://linkedin.com/in/jrsilverio17"
          target="_blank"
          className="cursor-pointer hover:bg-[#3F3F3F] hover:bg-opacity-70 rounded-md transition-all"
        >
          <CiLinkedin className="text-white text-5xl" />
        </a>
        <a
          href="https://www.instagram.com/slverio.jr/?igsh=MTFuOTZnaWN1dzYwcQ%3D%3D#"
          target="_blank"
          className="cursor-pointer hover:bg-[#3F3F3F] hover:bg-opacity-70 rounded-md transition-all"
        >
          <FaInstagram className="text-white text-5xl" />
        </a>
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=johnrey.silverio.p@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer hover:bg-[#3F3F3F] hover:bg-opacity-70 rounded-md transition-all"
        >
          <MdOutlineEmail className="text-white text-5xl" />
        </a>
      </div>
      <p className="px-20 py-2 text-2xl text-gray-200">
        @2025 John Rey Silverio All Rights Reserve
      </p>
    </div>
  );
};

export default Footer;
