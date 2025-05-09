"use client";

import React, { useState } from "react";
import ButtonType2 from "../../components/buttons/ButtonType2";
import Card from "../../components/card/Card";
import { experience, certificates } from "@/lib/cardData";
import { fillArrayToLength } from "@/lib/fillArrayToLength";
import { portfolioPlaceholder } from "@/lib/placeholders";

const Career = () => {
  const [showMoreExperiences, setShowMoreExperiences] = useState(false);
  const [showMoreCertificates, setShowMoreCertificates] = useState(false);

  const filledExperiences = fillArrayToLength(
    experience,
    4,
    portfolioPlaceholder
  );
  const filledCertificates = fillArrayToLength(
    certificates,
    4,
    portfolioPlaceholder
  );

  const displayedExperiences = showMoreExperiences
    ? filledExperiences
    : filledExperiences.slice(0, 4);

  const displayedCertificates = showMoreCertificates
    ? filledCertificates
    : filledCertificates.slice(0, 4);

  const handleShowMoreExperiences = () => {
    setShowMoreExperiences(!showMoreExperiences);
    setShowMoreCertificates(false);
  };

  const handleShowMoreCertificates = () => {
    setShowMoreCertificates(!showMoreCertificates);
    setShowMoreExperiences(false);
  };

  return (
    <div
      className="bg-background1 bg-cover bg-center min-h-screen flex justify-center items-center px-10 pb-10 pt-[90px]"
      id="career"
    >
      <div className="w-[417px] sm:w-[746px] md:w-[1280px] 3xl:w-[1650px] h-full z-10 flex flex-col items-center justify-center">
        <p className="text-[48px] text-highlight font-bold">CAREER</p>
        <div className="flex flex-col xl:flex-row w-full text-center gap-3 mt-5 transition-all duration-500">
          {/* EXPERIENCE SECTION */}
          <div
            className={`flex flex-col items-center gap-5 bg-component1 rounded-xl p-3 shadow-md/30 transition-all duration-500 ease-in-out overflow-hidden`}
            style={{
              flex: showMoreExperiences ? 3 : showMoreCertificates ? 1 : 2,
              transition: "flex 0.5s ease-in-out",
            }}
          >
            <p className="text-text text-[36px]">EXPERIENCE</p>
            <div className="w-full grid grid-cols-2 gap-3 3xl:gap-4 grid-flow-dense">
              {displayedExperiences.map((experience, index) => (
                <Card
                  key={index}
                  title={experience.title || "empty"}
                  description={experience.description || "empty"}
                  imageSource={experience.imageSource || ""}
                  componentSource={experience.componentSource || ""}
                  className={`${
                    showMoreExperiences ? "col-span-1" : "col-span-2"
                  }`}
                  style={{ gridRow: `${(index % 4) + 1}` }}
                />
              ))}
            </div>
            <ButtonType2
              text={showMoreExperiences ? "SHOW LESS" : "SHOW MORE"}
              onClick={handleShowMoreExperiences}
            />
          </div>

          {/* CERTIFICATE SECTION */}
          <div
            className={`flex flex-col items-center gap-5 bg-component1 rounded-xl p-3 shadow-md/30 transition-all duration-500 ease-in-out overflow-hidden`}
            style={{
              flex: showMoreCertificates ? 3 : showMoreExperiences ? 1 : 2,
              transition: "flex 0.5s ease-in-out",
            }}
          >
            <p className="text-text text-[36px]">CERTIFICATE</p>
            <div className="w-full grid grid-cols-2 gap-3 3xl:gap-4 grid-flow-dense">
              {displayedCertificates.map((certificate, index) => (
                <Card
                  key={index}
                  title={certificate.title || "empty"}
                  description={certificate.description || "empty"}
                  imageSource={certificate.imageSource || ""}
                  componentSource={certificate.componentSource || ""}
                  className={`${
                    showMoreCertificates ? "col-span-1" : "col-span-2"
                  }`}
                  style={{ gridRow: `${(index % 4) + 1}` }}
                />
              ))}
            </div>
            <ButtonType2
              text={showMoreCertificates ? "SHOW LESS" : "SHOW MORE"}
              onClick={handleShowMoreCertificates}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
