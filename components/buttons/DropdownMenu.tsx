"use client";

import React, { useRef } from "react";
//import { ThemeToggle } from "@/app/theme-toggle";
import NavbarButton from "../buttons/NavbarButton";

interface DropdownMenuProps {
  isOpen: boolean;
  onClose: () => void;
}
//test

const DropdownMenu: React.FC<DropdownMenuProps> = ({ isOpen, onClose }) => {
  const menuRef = useRef<HTMLDivElement | null>(null);

  const handleSmoothScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (!isOpen) return null;

  return (
    <div
      ref={menuRef}
      className="absolute top-full w-full bg-component1 border-2 border-background1 text-text rounded shadow-lg p-2"
    >
      <ul className="flex flex-col text-center items-center gap-2">
        {/* {["home", "about", "craft", "career", "contact"].map((section) => ( */}
        {["home", "about", "craft", "career"].map((section) => (
          <li key={section}>
            <a
              href={`#${section}`}
              onClick={(e) => {
                e.preventDefault();
                handleSmoothScroll(section);
                onClose(); // Close the menu after clicking
              }}
            >
              <NavbarButton text={section.toUpperCase()} />
            </a>
          </li>
        ))}
        {/* <li>
          <ThemeToggle />
        </li> */}
      </ul>
    </div>
  );
};

export default DropdownMenu;
