"use client";

import React from "react";
import FooterButton from "../buttons/FooterButton";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";
import Image from "next/image";

const Footer = () => {
  const handleSmoothScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const links = ["HOME", "ABOUT", "CRAFT", "CAREER", "CONTACT"];

  return (
    <div className="w-full bg-background2 flex flex-col justify-center items-center border-border2 border-t-2">
      <div className="px-10 w-full flex justify-center items-center py-10">
        <div className="w-[417px] sm:w-[746px] md:w-[1280px] 3xl:w-[1650px] grid sm:grid-cols-3 flex-col sm:flex-row gap-10 sm:gap-0 justify-between items-center sm:items-start">
          <div className="flex flex-col gap-5">
            <p className="text-center sm:text-left">Contacts</p>
            <div className="flex flex-col text-center sm:text-left gap-1">
              <div>
                <p>
                  <span className="text-highlight">Phone: </span>+63 930 629
                  7787
                </p>
              </div>
              <div>
                <p>
                  <span className="text-highlight">Email: </span>
                  johnrey.silverio.p@gmail.com
                </p>
              </div>
              <div>
                <p>
                  <span className="text-highlight">Availability: </span>
                  Available for freelance
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <p className="text-center">Quick Links</p>
            <div className="flex flex-row sm:flex-col items-center text-center gap-2">
              {links.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-text hover:text-highlight sm:w-[5rem] text-[16px]"
                  onClick={(e) => {
                    e.preventDefault();
                    handleSmoothScroll(link.toLowerCase());
                  }}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center sm:items-end text-center sm:text-end gap-5">
            <Image
              src="/svg/JR Logo.svg"
              width={1000}
              height={1000}
              alt="JR Logo"
              className="w-[40px] md:w-[45px] 3xl:w-[55px]"
            />

            <p className="text-text text-[16px]">
              Building the web, one line of code at a time.
              <br />
              Turning ideas into experiences and pixels into purpose.
            </p>

            <div className="flex gap-5 items-center">
              <a
                href="https://web.facebook.com/john.rey.jose.silverio"
                target="_blank"
              >
                <FooterButton Icon={FaFacebookF} />
              </a>
              <a
                href="https://www.linkedin.com/in/jrsilverio17/"
                target="_blank"
              >
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
          </div>
        </div>
      </div>
      <div className="w-full bg-[#121212] flex justify-center items-center">
        <div className="w-[417px] sm:w-[746px] md:w-[1280px] 3xl:w-[1650px] flex justify-center items-center text-center py-10">
          <p className="text-text text-center text-[16px]">
            {`Copyright ©2025 `}
            <a
              href="#home"
              className="text-highlight"
              onClick={(e) => {
                e.preventDefault();
                handleSmoothScroll("home");
              }}
            >
              John Rey J. Silverio
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
