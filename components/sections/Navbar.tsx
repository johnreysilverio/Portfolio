"use client";

import React, { useState } from "react";
import Image from "next/image";
import DropdownMenu from "../../components/buttons/DropdownMenu";
import { ThemeToggle } from "@/app/theme-toggle";
import NavbarButton from "../buttons/NavbarButton";
import { Button } from "@/components/ui/button";
import { FaBars } from "react-icons/fa";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSmoothScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="w-full h-[80px] sm:h-[65px] 3xl:h-[90px] bg-component1 flex justify-center fixed top-0 z-50 border-border1 border-b-2 px-10 transition-all duration-200">
        <div className="w-[417px] sm:w-[746px] md:w-[1280px] 3xl:w-[1650px] flex items-center justify-between relative">
          <Image
            src="/svg/JR Logo.svg"
            width={50}
            height={50}
            alt="JR Logo"
            className="3xl:w-[65px]"
          />

          <ul className="text-text list-none hidden sm:gap-5 sm:flex md:gap-10 lg:justify-center">
            {["home", "about", "craft", "career", "contact"].map((section) => (
              <li key={section}>
                <a
                  href={`#${section}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleSmoothScroll(section);
                  }}
                >
                  <NavbarButton text={section.toUpperCase()} />
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden sm:block">
            <ThemeToggle />
          </div>

          <Button
            size="icon"
            className="sm:hidden bg-transparent"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <FaBars className="text-text !w-10 !h-10" />
          </Button>
        </div>
      </div>

      <div
        className={`transition-all duration-300 ease-in-out transform ${
          isOpen
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 -translate-y-5 scale-95"
        } fixed top-[80px] w-full z-40 sm:hidden`}
      >
        <DropdownMenu
          isOpen={isOpen}
          onClose={() => {
            setIsOpen(false);
          }}
        />
      </div>
    </>
  );
};

export default Navbar;
