"use client";

import React from "react";
import { Button } from "@/components/ui/button";

interface FooterButtonProps {
  className?: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>; // type for an icon component
}

const FooterButton: React.FC<FooterButtonProps> = ({ Icon }) => {
  return (
    <Button
      variant="outline"
      size="icon"
      className={`p-2 w-[35px] rounded-md bg-component1 flex justify-center items-center border-2 border-highlight dark:border-highlight shadow-md/30`}
    >
      {Icon && <Icon className={`absolute text-text`} />}
    </Button>
  );
};

export default FooterButton;
