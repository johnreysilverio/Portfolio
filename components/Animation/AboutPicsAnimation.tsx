import React, { useState, useEffect } from "react";
import Image from "next/image";
import type { AboutImage } from "@/lib/portfolio-types";

const AboutPicsAnimation = ({ images }: { images: AboutImage[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imageCount = images.length;

  useEffect(() => {
    if (imageCount <= 1) {
      setCurrentIndex(0);
      return;
    }
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imageCount);
    }, 5000);

    return () => clearInterval(interval);
  }, [imageCount]);

  return (
    <div className="relative w-full h-full bg-background2">
      {images.map((image, index) => (
        <Image
          key={image.id ?? image.imageSource}
          src={image.imageSource}
          width={1000}
          height={1000}
          alt={image.altText}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
};

export default AboutPicsAnimation;
