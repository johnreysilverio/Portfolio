"use client";

import React from "react";
import { Button } from "@/components/ui/button";

interface NavbarButtonProps {
  text: string;
  isActive?: boolean;
  onClick?: () => void;
}

const NavbarButton: React.FC<NavbarButtonProps> = ({
  text,
  isActive = false,
  onClick,
}) => {
  return (
    <Button
      onClick={onClick}
      className={`flex justify-center rounded-none items-center w-[5rem] p-3 border-b-2 shadow-none bg-transparent transition-all duration-300 ease-in-out
        ${isActive ? "border-highlight" : "border-transparent"}
        hover:border-highlight hover:bg-transparent`}
    >
      <p className="text-[16px] text-text">{text}</p>
    </Button>
  );
};

export default NavbarButton;
