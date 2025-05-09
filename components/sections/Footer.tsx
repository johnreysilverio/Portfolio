"use client";

import React from "react";
import ButtonType3 from "../../components/buttons/ButtonType3";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full bg-background2 flex justify-center border-border2 border-t-2 py-5 transition-all duration-200">
      <div className="flex flex-col items-center justify-center gap-2">
        <div className="flex w-full gap-4 justify-center items-center">
          <a
            href="https://web.facebook.com/john.rey.jose.silverio"
            target="_blank"
          >
            <ButtonType3 Icon={FaFacebookF} className="w-[35px] rounded-md" />
          </a>
          <a href="https://www.linkedin.com/in/jrsilverio17/" target="_blank">
            <ButtonType3 Icon={FaLinkedinIn} className="w-[35px] rounded-md" />
          </a>
          <a href="https://www.instagram.com/slverio.jr/" target="_blank">
            <ButtonType3 Icon={FaInstagram} className="w-[35px] rounded-md" />
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=johnrey.silverio.p@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ButtonType3 Icon={FaEnvelope} className="w-[35px] rounded-md" />
          </a>
        </div>
        <p className="text-text text-[16px]">
          © 2025 John Rey J. Silverio. All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
