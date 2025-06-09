"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import ReactDOM from "react-dom";
import SeeMoreButton from "../buttons/SeeMoreButton";

interface CardProps {
  title?: string;
  description?: string;
  componentSource?: string;
  imageSource?: string;
  className?: string;
  style?: React.CSSProperties;
}

const Card: React.FC<CardProps> = ({
  title = "",
  description = "",
  componentSource = "",
  imageSource = "",
  className = "",
  style = {},
}) => {
  const [modalOpen, setModalOpen] = useState(false);

  // Dynamically import the component only if componentSource is provided
  const DynamicComponent =
    componentSource.trim() !== ""
      ? dynamic(() => import(`../${componentSource}`), {
          loading: () => <p>Loading...</p>,
          ssr: false,
        })
      : null;

  // Validate image src: must be non-empty and start with http or /
  const isValidSrc = (src: string) =>
    src.trim() !== "" && (src.startsWith("http") || src.startsWith("/"));

  // Prevent background scrolling when modal is open
  useEffect(() => {
    const { style: htmlStyle } = document.documentElement;
    const { style: bodyStyle } = document.body;

    if (modalOpen) {
      htmlStyle.overflow = "hidden";
      bodyStyle.overflow = "hidden";
    } else {
      htmlStyle.overflow = "";
      bodyStyle.overflow = "";
    }

    // Cleanup on unmount or modal close
    return () => {
      htmlStyle.overflow = "";
      bodyStyle.overflow = "";
    };
  }, [modalOpen]);

  // Open modal only if componentSource is provided
  const openModal = () => {
    if (componentSource.trim() !== "") setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  // Utility to check if the text is a placeholder "empty"
  const isEmptyText = (text: string) => text === "empty";

  // Modal JSX wrapped in a function for clarity
  const renderModal = () =>
    ReactDOM.createPortal(
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div
          className="fixed inset-0 bg-black opacity-70"
          onClick={closeModal}
          aria-label="Close modal backdrop"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === "Escape" && closeModal()}
        />

        <div
          className="relative z-50 bg-component1 p-5 rounded-md w-1/2 max-w-lg shadow-lg"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
        >
          <h2 id="modal-title" className="text-xl font-bold">
            {title}
          </h2>
          <p id="modal-description" className="mt-2">
            {description}
          </p>
          {DynamicComponent && <DynamicComponent />}
          <button
            onClick={closeModal}
            className="mt-5 bg-red-500 text-white p-2 rounded-md hover:bg-red-700 transition-all duration-300"
          >
            Close
          </button>
        </div>
      </div>,
      document.body
    );

  return (
    <div
      className={` flex flex-col p-3 rounded-md text-text text-start gap-3 overflow-hidden relative group  transition-all duration-300 
        ${className}
        ${
          isEmptyText(title)
            ? "bg-transparent"
            : "bg-component2 shadow-md/30 border-2 border-transparent hover:border-highlight"
        }`}
      style={style}
    >
      {isValidSrc(imageSource) && (
        <Image
          src={imageSource}
          alt="watermark"
          width={1000}
          height={1000}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 w-[120px] md:w-[180px] object-contain opacity-7 z-0 pointer-events-none transition-transform duration-500 ease-in-out group-hover:rotate-12 group-hover:opacity-15"
          priority={false}
          unoptimized={true}
        />
      )}

      <div className="relative z-10">
        <div className="flex justify-between">
          <p
            className={`text-[18px] sm:text-[24px] font-medium truncate ${
              isEmptyText(title) ? "text-transparent" : "text-text"
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
          className={`text-[14px] sm:text-[16px] truncate ${
            isEmptyText(description) ? "text-transparent" : "text-text"
          }`}
        >
          {description}
        </p>
      </div>

      {modalOpen && renderModal()}
    </div>
  );
};

export default Card;
