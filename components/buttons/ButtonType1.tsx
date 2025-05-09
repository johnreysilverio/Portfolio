"use client";

import React from "react";
import { Button } from "@/components/ui/button";

const buttonType1 = ({ text = "" }) => {
  return (
    <Button
      variant="default"
      className="bg-highlight dark:bg-highlight hover:bg-highlight/75 hover:dark:bg-highlight/75 flex justify-center rounded-xl p-5 sm:p-8 3xl:p-10 shadow-md/30"
    >
      <p className="text-[24px] sm:text-[32px] text-constantText text-center font-bold leading-none">
        {text}
      </p>
    </Button>
  );
};

export default buttonType1;
