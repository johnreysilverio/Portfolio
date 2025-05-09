"use client";

import React from "react";
import { Button } from "@/components/ui/button";

const NavbarButton = ({ text = "" }) => {
  return (
    <Button className="flex justify-center items-center p-3 bg-transparent hover:bg-transparent">
      <p
        className={`text-[24px] 3xl:text-[200%] border-b-2 border-transparent hover:border-highlight transition-all duration-300 ease-in-out
            text-text
          `}
      >
        {text}
      </p>
    </Button>
  );
};

export default NavbarButton;
