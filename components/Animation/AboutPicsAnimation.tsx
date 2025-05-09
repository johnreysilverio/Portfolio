import React, { useState, useEffect } from "react";
import Image from "next/image";

const images = [
  "/png/aboutpics/aboutpic1.png",
  "/png/aboutpics/aboutpic2.png",
  "/png/aboutpics/aboutpic3.png",
  "/png/aboutpics/aboutpic4.png",
];

const AboutPicsAnimation = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full bg-background2">
      {images.map((src, index) => (
        <Image
          key={index}
          src={src}
          width={1000}
          height={1000}
          alt={`About pic ${index + 1}`}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
};

export default AboutPicsAnimation;
