import React from "react";
import { AiOutlineFacebook } from "react-icons/ai";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="w-full bg-[#1A1A1A] flex flex-col items-center justify-center">
      <a className="px-20 py-2 text-2xl text-gray-200 my-5" href="#home">
        Back to Top
      </a>
      <div className="flex my-5 gap-5">
        <a
          href="https://www.facebook.com/john.rey.jose.silverio"
          target="_blank"
          className="cursor-pointer"
        >
          <AiOutlineFacebook className="text-white text-5xl" />
        </a>
        <a
          href="https://linkedin.com/in/jrsilverio17"
          target="_blank"
          className="cursor-pointer"
        >
          <CiLinkedin className="text-white text-5xl" />
        </a>
        <a
          href="https://www.instagram.com/slverio.jr/?igsh=MTFuOTZnaWN1dzYwcQ%3D%3D#"
          target="_blank"
          className="cursor-pointer"
        >
          <FaInstagram className="text-white text-5xl" />
        </a>
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=johnrey.silverio.p@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer"
        >
          <MdOutlineEmail className="text-white text-5xl" />
        </a>
      </div>
      <p className="px-20 py-2 text-2xl text-gray-200 my-5">
        @2025 John Rey Silverio All Rights Reserve
      </p>
    </div>
  );
};

export default Footer;
