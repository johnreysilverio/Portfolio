"use client";

import React from "react";
import { Button } from "@/components/ui/button";

const NavbarButton = ({ text = "" }) => {
  return (
    <Button className="flex justify-center rounded-none items-center w-[5rem] p-3 border-b-2 border-transparent hover:border-highlight shadow-none bg-transparent hover:bg-transparent transition-all duration-300 ease-in-out">
      <p className={`text-[16px] text-text`}>{text}</p>
    </Button>
  );
};

export default NavbarButton;
