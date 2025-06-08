"use client";

import React, { useEffect, useRef, useState } from "react";
import SecondaryButton from "../buttons/SecondaryButton";
import Card from "../../components/card/Card";
import { experience, certificates } from "@/lib/cardData";
import { fillArrayToLength } from "@/lib/fillArrayToLength";
import { portfolioPlaceholder } from "@/lib/placeholders";

const Career = () => {
  const [showMoreExperiences, setShowMoreExperiences] = useState(false);
  const [showMoreCertificates, setShowMoreCertificates] = useState(false);
  const [mobileShowMoreExperiences, setMobileShowMoreExperiences] = useState<
    "collapsed" | "partial" | "expanded"
  >("partial");
  const [mobileShowMoreCertificates, setMobileShowMoreCertificates] = useState<
    "collapsed" | "partial" | "expanded"
  >("partial");

  const experiencesRef = useRef<HTMLDivElement>(null);
  const certificatesRef = useRef<HTMLDivElement>(null);

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

  const [experiencesHeight, setExperiencesHeight] = useState("315px");
  const [certificatesHeight, setCertificatesHeight] = useState("315px");

  const displayedExperiences = showMoreExperiences
    ? filledExperiences
    : filledExperiences.slice(0, 4);
  const displayedCertificates = showMoreCertificates
    ? filledCertificates
    : filledCertificates.slice(0, 4);

  const mobileDisplayedExperiences =
    mobileShowMoreExperiences === "collapsed"
      ? filledExperiences.slice(0, 1)
      : mobileShowMoreExperiences === "partial"
      ? experience.length <= 4
        ? experience
        : experience.slice(0, 4)
      : filledExperiences.slice(0, 7);

  const mobileDisplayedCertificates =
    mobileShowMoreCertificates === "collapsed"
      ? filledCertificates.slice(0, 1)
      : mobileShowMoreCertificates === "partial"
      ? certificates.length <= 4
        ? certificates
        : certificates.slice(0, 4)
      : filledCertificates.slice(0, 7);

  const handleShowMoreExperiences = () => {
    setShowMoreExperiences(!showMoreExperiences);
    setShowMoreCertificates(false);
  };

  const handleShowMoreCertificates = () => {
    setShowMoreCertificates(!showMoreCertificates);
    setShowMoreExperiences(false);
  };

  const handleMobileShowMoreExperiences = () => {
    if (mobileShowMoreExperiences !== "expanded") {
      setMobileShowMoreExperiences("expanded");
      setMobileShowMoreCertificates("collapsed");
    } else {
      setMobileShowMoreExperiences("partial");
      setMobileShowMoreCertificates("partial");
    }
  };

  const handleMobileShowMoreCertificates = () => {
    if (mobileShowMoreCertificates !== "expanded") {
      setMobileShowMoreCertificates("expanded");
      setMobileShowMoreExperiences("collapsed");
    } else {
      setMobileShowMoreCertificates("partial");
      setMobileShowMoreExperiences("partial");
    }
  };

  useEffect(() => {
    if (experiencesRef.current) {
      const height =
        mobileShowMoreExperiences === "expanded"
          ? `${experiencesRef.current.scrollHeight}px`
          : mobileShowMoreExperiences === "partial"
          ? "530px"
          : "235px";
      setExperiencesHeight(height);
    }
  }, [mobileShowMoreExperiences, mobileDisplayedExperiences]);

  useEffect(() => {
    if (certificatesRef.current) {
      const height =
        mobileShowMoreCertificates === "expanded"
          ? `${certificatesRef.current.scrollHeight}px`
          : mobileShowMoreCertificates === "partial"
          ? "530px"
          : "235px";
      setCertificatesHeight(height);
    }
  }, [mobileShowMoreCertificates, mobileDisplayedCertificates]);

  return (
    <div
      className="min-h-screen flex justify-center px-10 transition-all duration-200"
      id="career"
    >
      <div className="w-full max-w-[417px] sm:max-w-[746px] md:max-w-[1280px] 3xl:max-w-[1650px] h-full  flex flex-col items-center justify-center">
        <p className="text-[36px] sm:text-[48px] text-highlight font-bold mt-10">
          CAREER
        </p>

        {/* Tablet & Desktop View */}
        <div className="hidden sm:flex w-full text-center gap-2 mt-5 transition-all duration-500">
          {/* EXPERIENCE Section */}
          <div
            className="flex flex-col items-center gap-5 bg-component1 rounded-xl p-3 shadow-md/30 transition-all duration-500 ease-in-out overflow-hidden"
            style={{
              flex: showMoreExperiences ? 3 : showMoreCertificates ? 1 : 2,
              transition: "flex 0.5s ease-in-out",
            }}
          >
            <p className="text-text text-[36px] font-semibold">EXPERIENCE</p>
            <div className="w-full grid grid-cols-2 gap-3 3xl:gap-4 grid-flow-dense">
              {displayedExperiences.map((exp, index) => (
                <Card
                  key={index}
                  title={exp.title || "empty"}
                  description={exp.description || "empty"}
                  imageSource={exp.imageSource || ""}
                  componentSource={exp.componentSource || ""}
                  className={showMoreExperiences ? "col-span-1" : "col-span-2"}
                  style={{ gridRow: `${(index % 4) + 1}` }}
                />
              ))}
            </div>
            {experience.length >= 5 && (
              <SecondaryButton
                text={showMoreExperiences ? "SHOW LESS" : "SHOW MORE"}
                onClick={handleShowMoreExperiences}
              />
            )}
          </div>

          {/* CERTIFICATES Section */}
          <div
            className="flex flex-col items-center gap-5 bg-component1 rounded-xl p-3 shadow-md/30 transition-all duration-500 ease-in-out overflow-hidden"
            style={{
              flex: showMoreCertificates ? 3 : showMoreExperiences ? 1 : 2,
              transition: "flex 0.5s ease-in-out",
            }}
          >
            <p className="text-text text-[36px] font-semibold">CERTIFICATES</p>
            <div className="w-full grid grid-cols-2 gap-3 3xl:gap-4 grid-flow-dense">
              {displayedCertificates.map((cert, index) => (
                <Card
                  key={index}
                  title={cert.title || "empty"}
                  description={cert.description || "empty"}
                  imageSource={cert.imageSource || ""}
                  componentSource={cert.componentSource || ""}
                  className={showMoreCertificates ? "col-span-1" : "col-span-2"}
                  style={{ gridRow: `${(index % 4) + 1}` }}
                />
              ))}
            </div>
            {certificates.length >= 5 && (
              <SecondaryButton
                text={showMoreCertificates ? "SHOW LESS" : "SHOW MORE"}
                onClick={handleShowMoreCertificates}
              />
            )}
          </div>
        </div>

        {/* Mobile View */}
        <div className="sm:hidden flex flex-col gap-4 mt-5 w-full">
          {/* EXPERIENCE (Mobile) */}
          <div
            style={{
              height: experiencesHeight,
              transition: "height 0.5s ease-in-out",
              overflow: "hidden",
            }}
            className="flex flex-col items-center gap-5 bg-component1 rounded-xl p-3 shadow-md/30"
            ref={experiencesRef}
          >
            <p className="text-text text-[24px] font-semibold">EXPERIENCE</p>
            <div className="w-full flex flex-col gap-3 3xl:gap-4">
              {mobileDisplayedExperiences.map((exp, index) => (
                <Card
                  key={index}
                  title={exp.title || "empty"}
                  description={exp.description || "empty"}
                  imageSource={exp.imageSource || ""}
                  componentSource={exp.componentSource || ""}
                  className="col-span-1"
                />
              ))}
            </div>
            {certificates.length >= 5 && (
              <SecondaryButton
                text={
                  mobileShowMoreExperiences === "expanded"
                    ? "SHOW LESS"
                    : "SHOW MORE"
                }
                onClick={handleMobileShowMoreExperiences}
              />
            )}
          </div>

          {/* CERTIFICATES (Mobile) */}
          <div
            style={{
              height: certificatesHeight,
              transition: "height 0.5s ease-in-out",
              overflow: "hidden",
            }}
            className="flex flex-col items-center gap-5 bg-component1 rounded-xl p-3 shadow-md/30"
            ref={certificatesRef}
          >
            <p className="text-text text-[24px] font-semibold">CERTIFICATES</p>
            <div className="w-full flex flex-col gap-3 3xl:gap-4">
              {mobileDisplayedCertificates.map((cert, index) => (
                <Card
                  key={index}
                  title={cert.title || "empty"}
                  description={cert.description || "empty"}
                  imageSource={cert.imageSource || ""}
                  componentSource={cert.componentSource || ""}
                  className="col-span-1"
                />
              ))}
            </div>
            {certificates.length >= 5 && (
              <SecondaryButton
                text={
                  mobileShowMoreCertificates === "expanded"
                    ? "SHOW LESS"
                    : "SHOW MORE"
                }
                onClick={handleMobileShowMoreCertificates}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
