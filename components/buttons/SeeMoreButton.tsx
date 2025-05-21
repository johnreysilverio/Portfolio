"use client";

import React from "react";
import { Button } from "@/components/ui/button";

interface SeeMoreButtonProps {
  componentSource: string;
  onOpenModal: (source: string) => void;
}

const SeeMoreButton: React.FC<SeeMoreButtonProps> = ({
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
          className={`text-[16px] 3xl:text-[20px] font-normal border-b-2 border-transparent hover:border-highlight transition-all duration-300 ease-in-out ${
            !componentSource ? "text-transparent" : "text-text"
          }`}
        >
          See More
        </p>
      </Button>
    </div>
  );
};

export default SeeMoreButton;
