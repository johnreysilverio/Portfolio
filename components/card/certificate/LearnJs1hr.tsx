import React from "react";
import Image from "next/image";

const LearnJs1hr = () => {
  return (
    <div>
      <Image
        src="/png/certificates/bitdegree-certificate-1594351.jpg"
        alt="OJT Certificate"
        width={1000}
        height={1000}
        className="w-[120px] md:w-[380px] object-contain z-0 pointer-events-none transition-transform duration-500 ease-in-out"
        priority={false}
        unoptimized
      />
    </div>
  );
};

export default LearnJs1hr;
