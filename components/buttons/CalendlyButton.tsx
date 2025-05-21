"use client";

import React from "react";
import { Button } from "@/components/ui/button";

const CalendlyButton = ({ text = "" }) => {
  const handleClick = () => {
    window.open(
      "https://calendly.com/johnrey-silverio-p/solo-meeting",
      "_blank"
    );
  };

  return (
    <Button
      onClick={handleClick}
      variant="default"
      className="bg-component2 dark:bg-component2 hover:bg-highlight/75 hover:dark:bg-highlight/75 border-1 border-component2 hover:border-highlight flex justify-center rounded-md px-10 py-6 shadow-md/30"
    >
      <p className="text-[20px] 3xl:text-[24px] font-medium text-text text-center leading-none">
        {text}
      </p>
    </Button>
  );
};

export default CalendlyButton;
