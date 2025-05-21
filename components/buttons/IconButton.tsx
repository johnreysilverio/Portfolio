"use client";

import React from "react";
import { Button } from "@/components/ui/button";

interface IconButtonProps {
  className?: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>; // type for an icon component
}

const IconButton: React.FC<IconButtonProps> = ({ Icon }) => {
  return (
    <Button
      variant="outline"
      size="icon"
      className={`p-2 w-[35px] h-[35px] 3xl:w-[50px] 3xl:h-[50px] rounded-md bg-component1 flex justify-center items-center border-2 border-highlight dark:border-highlight shadow-md/30`}
    >
      {Icon && (
        <Icon className={`absolute text-text 3xl:!w-[24px] 3xl:!h-[24px]`} />
      )}
    </Button>
  );
};

export default IconButton;
