"use client";

import React from "react";
import FooterButton from "../buttons/FooterButton";
import { FaLinkedinIn, FaInstagram, FaEnvelope } from "react-icons/fa";
import Image from "next/image";

const Footer = () => {
  const links = ["HOME", "ABOUT", "CRAFT", "CAREER", "CONTACT"];

  const handleSmoothScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-background2 border-t-2 border-border2 text-text flex flex-col items-center">
      <div className="w-full px-10 py-10 flex justify-center">
        <div className="w-[417px] sm:w-[746px] md:w-[1280px] 3xl:w-[1650px] grid sm:grid-cols-3 gap-10 sm:gap-0 items-center">
          {/* Contacts */}
          <section className="flex flex-col gap-5">
            <p className="text-center sm:text-left font-semibold">Contacts</p>
            <div className="flex flex-col gap-1 text-center sm:text-left">
              <p>
                <span className="text-highlight">Phone: </span>+63 930 629 7787
              </p>
              <p>
                <span className="text-highlight">Email: </span>
                johnrey.silverio.p@gmail.com
              </p>
              <p>
                <span className="text-highlight">Availability: </span>
                Available for freelance
              </p>
            </div>
          </section>

          {/* Quick Links */}
          <nav className="flex flex-col gap-5 text-center">
            <p className="font-semibold">Quick Links</p>
            <div className="flex flex-row sm:flex-col justify-center items-center gap-2">
              {links.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="sm:w-[5rem] text-[16px] hover:text-highlight"
                  onClick={(e) => {
                    e.preventDefault();
                    handleSmoothScroll(link.toLowerCase());
                  }}
                >
                  {link}
                </a>
              ))}
            </div>
          </nav>

          {/* Branding & Socials */}
          <section className="flex flex-col items-center sm:items-end text-center sm:text-end gap-5">
            <Image
              src="/svg/JR Logo.svg"
              alt="JR Logo"
              width={1000}
              height={1000}
              className="w-[40px] md:w-[45px] 3xl:w-[55px]"
            />
            <p className="text-[16px]">
              Building the web, one line of code at a time.
              <br />
              Turning ideas into experiences and pixels into purpose.
            </p>
            <div className="flex gap-5 items-center">
              {/* Uncomment if Facebook is needed
              <a href="https://web.facebook.com/john.rey.jose.silverio" target="_blank" rel="noopener noreferrer">
                <FooterButton Icon={FaFacebookF} />
              </a> */}
              <a
                href="https://www.linkedin.com/in/jrsilverio17/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FooterButton Icon={FaLinkedinIn} />
              </a>
              <a
                href="https://www.instagram.com/slverio.jr/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FooterButton Icon={FaInstagram} />
              </a>
              <a
                href="mailto:johnrey.silverio.p@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FooterButton Icon={FaEnvelope} />
              </a>
            </div>
          </section>
        </div>
      </div>

      {/* Copyright */}
      <div className="w-full bg-[#121212] flex justify-center items-center">
        <div className="w-[417px] sm:w-[746px] md:w-[1280px] 3xl:w-[1650px] py-10 text-center">
          <p className="text-[16px]">
            © 2025{" "}
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
    </footer>
  );
};

export default Footer;
