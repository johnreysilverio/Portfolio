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

  const isDisabled = componentSource.trim() === "";

  return (
    <Button
      className="flex justify-center items-center shadow-none rounded-4xl p-3 3xl:p-4 bg-transparent hover:bg-transparent"
      onClick={handleClick}
      disabled={isDisabled}
    >
      <p
        className={`text-[14px] sm:text-[16px] font-normal border-b-2 border-transparent hover:border-highlight transition-all duration-300 ease-in-out ${
          isDisabled ? "text-transparent" : "text-text"
        }`}
      >
        See More
      </p>
    </Button>
  );
};

export default SeeMoreButton;
