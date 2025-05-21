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
      className="bg-highlight dark:bg-highlight hover:bg-highlight/75 hover:dark:bg-highlight/75 flex justify-center items-center rounded-4xl p-3 3xl:p-4 shadow-md/30"
      onClick={onClick}
    >
      <p className="text-[16px] 3xl:text-[20px] text-constantText font-bold leading-none">
        {text}
      </p>
    </Button>
  );
};

export default SecondaryButton;
