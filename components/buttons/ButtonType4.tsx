"use client";

import React from "react";
import { Button } from "@/components/ui/button";

interface ButtonType4Props {
  componentSource: string;
  onOpenModal: (source: string) => void;
}

const ButtonType4: React.FC<ButtonType4Props> = ({
  componentSource,
  onOpenModal,
}) => {
  const handleClick = () => {
    onOpenModal(componentSource);
  };

  return (
    <div>
      <Button
        className="flex justify-center items-center rounded-4xl p-3 3xl:p-4 bg-transparent hover:bg-transparent"
        onClick={handleClick}
        disabled={!componentSource ? true : false}
      >
        <p
          className={`text-[16px] 3xl:text-[20px] border-b-2 border-transparent hover:border-highlight transition-all duration-300 ease-in-out ${
            !componentSource ? "text-transparent" : "text-text"
          }`}
        >
          See More
        </p>
      </Button>
    </div>
  );
};

export default ButtonType4;
