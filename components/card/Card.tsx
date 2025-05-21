"use client";

import React, { useState } from "react";
import Image from "next/image";
import SeeMoreButton from "../buttons/SeeMoreButton";

interface CardProps {
  title?: string;
  description?: string;
  componentSource?: string;
  imageSource?: string;
  className?: string;
  style?: React.CSSProperties; // Adding style prop for dynamic styling
}

const Card: React.FC<CardProps> = ({
  title = "",
  description = "",
  componentSource = "",
  imageSource = "",
  className = "",
  style = {}, // Default empty object for style prop
}) => {
  const [modalOpen, setModalOpen] = useState(false); // State to control the modal
  const [currentComponentSource, setCurrentComponentSource] =
    useState<string>("");

  const isValidSrc = (src: string): boolean => {
    if (typeof src !== "string" || src.trim() === "") return false;
    if (src.startsWith("http") || src.startsWith("/")) return true;
    return false;
  };

  const openModal = (source: string) => {
    setCurrentComponentSource(source); // Set the componentSource to display in the modal
    setModalOpen(true); // Open the modal
  };

  const closeModal = () => {
    setModalOpen(false); // Close the modal
    setCurrentComponentSource(""); // Clear the componentSource
  };

  return (
    <div
      className={`bg-component2 flex flex-col p-3 rounded-md text-text text-start gap-3 overflow-hidden relative group shadow-md/30 border-2 border-transparent hover:border-highlight transition-all duration-300 ${className}`}
      style={style}
    >
      {isValidSrc(imageSource) && (
        <Image
          src={imageSource}
          alt="watermark"
          width={1000}
          height={1000}
          className="absolute top-0 left-0 transform w-[350px] mt-[-7rem] ml-[5rem] object-contain opacity-10 z-0 transition-all duration-500 ease-in-out group-hover:rotate-12"
        />
      )}
      <div className="relative z-10">
        <div className="flex justify-between">
          <p
            className={`text-[24px] font-medium truncate ${
              title === "empty" ? "text-transparent" : "text-text"
            }`}
          >
            {title}
          </p>
          <SeeMoreButton
            componentSource={componentSource}
            onOpenModal={openModal}
          />
        </div>
        <p
          className={`text-[16px] truncate ${
            description === "empty" ? "text-transparent" : "text-text"
          }`}
        >
          {description}
        </p>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-5 rounded-md w-1/2">
            <h2 className="text-xl font-bold">
              Modal for {currentComponentSource}
            </h2>
            <p className="mt-2">
              You can now display details based on the componentSource:
            </p>
            <p>{currentComponentSource}</p>
            <button
              onClick={closeModal}
              className="mt-5 bg-red-500 text-white p-2 rounded-md hover:bg-red-700 transition-all duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
