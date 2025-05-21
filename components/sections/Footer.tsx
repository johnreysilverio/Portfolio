"use client";

import React from "react";
import FooterButton from "../buttons/FooterButton";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const handleSmoothScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full bg-background2 flex justify-center border-border2 border-t-2 pt-5 transition-all duration-200">
      <div className="flex flex-col items-center justify-center gap-5 w-full">
        <div className="flex flex-col text-center gap-2">
          <a
            href="#home"
            className="text-highlight text-[20px] font-bold"
            onClick={(e) => {
              e.preventDefault();
              handleSmoothScroll("home");
            }}
          >
            Portfolio
          </a>
          <p className="text-text text-[16px]">
            Building the web, one line of code at a time
            <br />
            turning ideas into experiences and pixels into purpose.
          </p>
        </div>

        <div className="flex w-full gap-4 justify-center items-center">
          <a
            href="https://web.facebook.com/john.rey.jose.silverio"
            target="_blank"
          >
            <FooterButton Icon={FaFacebookF} />
          </a>
          <a href="https://www.linkedin.com/in/jrsilverio17/" target="_blank">
            <FooterButton Icon={FaLinkedinIn} />
          </a>
          <a href="https://www.instagram.com/slverio.jr/" target="_blank">
            <FooterButton Icon={FaInstagram} />
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=johnrey.silverio.p@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FooterButton Icon={FaEnvelope} />
          </a>
        </div>
        <div className="w-full justify-center flex bg-[#121212] py-3">
          <div className="flex flex-col md:flex-row w-[417px] sm:w-[746px] md:w-[1280px] 3xl:w-[1650px] justify-between items-center">
            <p className="text-text text-center text-[16px]">
              Copyright ©2025{" "}
              <a
                href="#home"
                className="text-highlight"
                onClick={(e) => {
                  e.preventDefault();
                  handleSmoothScroll("home"); // or replace "home" with the actual section ID
                }}
              >
                John Rey J. Silverio
              </a>
            </p>

            <ul className="text-text flex list-none lg:justify-center">
              {["about", "craft", "career", "contact"].map((section) => (
                <li key={section}>
                  <a
                    href={`#${section}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleSmoothScroll(section);
                    }}
                  >
                    <Button className="flex justify-center rounded-none items-center p-1 border-b-2 border-transparent hover:border-highlight shadow-none bg-transparent hover:bg-transparent transition-all duration-300 ease-in-out">
                      <p className={`text-[16px] text-text font-normal`}>
                        {section.toLocaleUpperCase()}
                      </p>
                    </Button>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
