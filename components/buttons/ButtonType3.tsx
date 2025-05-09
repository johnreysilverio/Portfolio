"use client";

import React from "react";
import { Button } from "@/components/ui/button";

interface ButtonType3Props {
  className?: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>; // type for an icon component
}

const ButtonType3: React.FC<ButtonType3Props> = ({ className = "", Icon }) => {
  return (
    <Button
      variant="outline"
      size="icon"
      className={`p-2 ${
        className
          ? className
          : "w-[50px] h-[50px] sm:w-[55px] sm:h-[55px] lg:w-[60px] lg:h-[60px] 3xl:w-[65px] 3xl:h-[65px] rounded-xl"
      } bg-component1 flex justify-center items-center border-2 border-highlight dark:border-highlight shadow-md/30`}
      onClick={() => console.log("test")}
    >
      {Icon && (
        <Icon
          className={`absolute ${className ? "" : "!w-10 !h-10"} text-text`}
        />
      )}
    </Button>
  );
};

export default ButtonType3;
