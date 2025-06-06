"use client";

import React, { useState } from "react";
import Image from "next/image";
import DropdownMenu from "../../components/buttons/DropdownMenu";
import { Button } from "@/components/ui/button";
import { FaBars } from "react-icons/fa";

const MobileNavbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="md:hidden w-full h-[50px] bg-component1 flex justify-center fixed top-0 z-50 border-border1 border-2 px-10 transition-all duration-200">
        <div className="w-[417px] sm:w-[746px] md:w-[1280px] 3xl:w-[1650px] flex items-center justify-between relative">
          <Image
            src="/svg/JR Logo.svg"
            width={1000}
            height={1000}
            alt="JR Logo"
            className="w-[40px] md:w-[45px] 3xl:w-[55px]"
          />

          <Button
            size="icon"
            className="bg-transparent"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <FaBars className="text-text !w-7 !h-7" />
          </Button>
        </div>
      </div>

      <div
        className={`transition-all duration-300 ease-in-out transform ${
          isOpen
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 -translate-y-5 scale-95"
        } fixed top-[45px] w-full z-40 sm:hidden`}
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

export default MobileNavbar;
