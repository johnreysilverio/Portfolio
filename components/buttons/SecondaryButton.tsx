"use client";

import React from "react";
import { Button } from "@/components/ui/button";

interface SecondaryButtonProps {
  text: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit";
}

const SecondaryButton: React.FC<SecondaryButtonProps> = ({
  text = "",
  onClick,
  disabled = false,
  type = "button",
}) => {
  return (
    <Button
      type={type}
      disabled={disabled}
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
