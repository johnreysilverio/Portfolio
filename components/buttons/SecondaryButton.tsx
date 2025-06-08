"use client";

import React from "react";
import { Button } from "@/components/ui/button";

interface SecondaryButtonProps {
  text: string;
  onClick?: () => void; // Add the onClick prop here
}

const SecondaryButton: React.FC<SecondaryButtonProps> = ({
  text = "",
  onClick,
}) => {
  return (
    <Button
      variant="default"
      className="bg-component2 hover:bg-highlight/50 border-1 border-highlight flex justify-center items-center rounded-4xl p-3 3xl:p-4 shadow-md/30"
      onClick={onClick}
    >
      <p className="text-[16px] 3xl:text-[20px] text-highlight font-bold leading-none">
        {text}
      </p>
    </Button>
  );
};

export default SecondaryButton;
