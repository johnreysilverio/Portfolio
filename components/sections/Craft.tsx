"use client";

import React, { useEffect, useRef, useState } from "react";
import SecondaryButton from "../buttons/SecondaryButton";
import Card from "../../components/card/Card";
import { skills, projects } from "@/lib/cardData";
import { fillArrayToLength } from "@/lib/fillArrayToLength";
import { portfolioPlaceholder } from "@/lib/placeholders";

const Craft = () => {
  const [showMoreSkills, setShowMoreSkills] = useState(false);
  const [showMoreProjects, setShowMoreProjects] = useState(false);
  const [mobileShowMoreSkills, setMobileShowMoreSkills] = useState<
    "collapsed" | "partial" | "expanded"
  >("partial");
  const [mobileShowMoreProjects, setMobileShowMoreProjects] = useState<
    "collapsed" | "partial" | "expanded"
  >("partial");

  const skillsRef = useRef<HTMLDivElement>(null); // ✅ FIXED
  const projectsRef = useRef<HTMLDivElement>(null); // ✅ FIXED

  const filledSkills = fillArrayToLength(skills, 4, portfolioPlaceholder);
  const filledProjects = fillArrayToLength(projects, 4, portfolioPlaceholder);

  const [skillsHeight, setSkillsHeight] = useState("315px");
  const [projectsHeight, setProjectsHeight] = useState("315px");

  const displayedSkills = showMoreSkills
    ? filledSkills
    : filledSkills.slice(0, 4);
  const displayedProjects = showMoreProjects
    ? filledProjects
    : filledProjects.slice(0, 4);

  const mobileDisplayedSkills =
    mobileShowMoreSkills === "collapsed"
      ? filledSkills.slice(0, 1)
      : mobileShowMoreSkills === "partial"
      ? filledSkills.length <= 4
        ? skills
        : skills.slice(0, 4)
      : filledSkills.slice(0, 7);

  const mobileDisplayedProjects =
    mobileShowMoreProjects === "collapsed"
      ? filledProjects.slice(0, 1)
      : mobileShowMoreProjects === "partial"
      ? filledProjects.length <= 4
        ? projects
        : projects.slice(0, 4)
      : filledProjects.slice(0, 7);

  const handleShowMoreSkills = () => {
    setShowMoreSkills(!showMoreSkills);
    setShowMoreProjects(false);
  };

  const handleShowMoreProjects = () => {
    setShowMoreProjects(!showMoreProjects);
    setShowMoreSkills(false);
  };

  const handleMobileShowMoreSkills = () => {
    if (mobileShowMoreSkills !== "expanded") {
      setMobileShowMoreSkills("expanded");
      setMobileShowMoreProjects("collapsed");
    } else {
      setMobileShowMoreSkills("partial");
      setMobileShowMoreProjects("partial");
    }
  };

  const handleMobileShowMoreProjects = () => {
    if (mobileShowMoreProjects !== "expanded") {
      setMobileShowMoreProjects("expanded");
      setMobileShowMoreSkills("collapsed");
    } else {
      setMobileShowMoreProjects("partial");
      setMobileShowMoreSkills("partial");
    }
  };

  useEffect(() => {
    if (skillsRef.current) {
      const height =
        mobileShowMoreSkills === "expanded"
          ? `${skillsRef.current.scrollHeight}px`
          : mobileShowMoreSkills === "partial"
          ? "530px"
          : "235px";
      setSkillsHeight(height);
    }
  }, [mobileShowMoreSkills, mobileDisplayedSkills]);

  useEffect(() => {
    if (projectsRef.current) {
      const height =
        mobileShowMoreProjects === "expanded"
          ? `${projectsRef.current.scrollHeight}px`
          : mobileShowMoreProjects === "partial"
          ? "530px"
          : "235px";
      setProjectsHeight(height);
    }
  }, [mobileShowMoreProjects, mobileDisplayedProjects]);

  return (
    <div
      className="min-h-screen flex justify-center px-10 transition-all duration-200"
      id="craft"
    >
      <div className="w-full max-w-[417px] sm:max-w-[746px] md:max-w-[1280px] 3xl:max-w-[1650px] h-full flex flex-col items-center justify-center">
        <p className="text-[36px] sm:text-[48px] text-highlight font-bold mt-10">
          CRAFTS
        </p>

        {/* Tablet and Desktop View */}
        <div className="hidden sm:flex w-full text-center gap-2 mt-5 transition-all duration-500">
          {/* SKILLS Section */}
          <div
            className="flex flex-col items-center gap-5 bg-component1 rounded-xl p-3 shadow-md/30 transition-all duration-500 ease-in-out overflow-hidden"
            style={{
              flex: showMoreSkills ? 3 : showMoreProjects ? 1 : 2,
              transition: "flex 0.5s ease-in-out",
            }}
          >
            <p className="text-text text-[36px] font-semibold">SKILLS</p>
            <div className="w-full grid grid-cols-2 gap-3 3xl:gap-4 grid-flow-dense">
              {displayedSkills.map((skill, index) => (
                <Card
                  key={index}
                  title={skill.title || "empty"}
                  description={skill.description || "empty"}
                  imageSource={skill.imageSource || ""}
                  componentSource={skill.componentSource || ""}
                  className={showMoreSkills ? "col-span-1" : "col-span-2"}
                  style={{ gridRow: `${(index % 4) + 1}` }}
                />
              ))}
            </div>

            {skills.length >= 5 && (
              <SecondaryButton
                text={showMoreSkills ? "SHOW LESS" : "SHOW MORE"}
                onClick={handleShowMoreSkills}
              />
            )}
          </div>

          {/* PROJECTS Section */}
          <div
            className="flex flex-col items-center gap-5 bg-component1 rounded-xl p-3 shadow-md/30 transition-all duration-500 ease-in-out overflow-hidden"
            style={{
              flex: showMoreProjects ? 3 : showMoreSkills ? 1 : 2,
              transition: "flex 0.5s ease-in-out",
            }}
          >
            <p className="text-text text-[36px] font-semibold">PROJECTS</p>
            <div className="w-full grid grid-cols-2 gap-3 3xl:gap-4 grid-flow-dense">
              {displayedProjects.map((project, index) => (
                <Card
                  key={index}
                  title={project.title || "empty"}
                  description={project.description || "empty"}
                  imageSource={project.imageSource || ""}
                  componentSource={project.componentSource || ""}
                  className={showMoreProjects ? "col-span-1" : "col-span-2"}
                  style={{ gridRow: `${(index % 4) + 1}` }}
                />
              ))}
            </div>
            {projects.length >= 5 && (
              <SecondaryButton
                text={showMoreProjects ? "SHOW LESS" : "SHOW MORE"}
                onClick={handleShowMoreProjects}
              />
            )}
          </div>
        </div>

        {/* Mobile View */}
        <div className="sm:hidden flex flex-col gap-4 mt-5 w-full">
          {/* SKILLS (Mobile) */}
          <div
            style={{
              height: skillsHeight,
              transition: "height 0.5s ease-in-out",
              overflow: "hidden",
            }}
            className="flex flex-col items-center gap-5 bg-component1 rounded-xl p-3 shadow-md/30"
            ref={skillsRef}
          >
            <p className="text-text text-[24px] font-semibold">SKILLS</p>
            <div className="w-full flex flex-col gap-3 3xl:gap-4">
              {mobileDisplayedSkills.map((skill, index) => (
                <Card
                  key={index}
                  title={skill.title || "empty"}
                  description={skill.description || "empty"}
                  imageSource={skill.imageSource || ""}
                  componentSource={skill.componentSource || ""}
                  className="col-span-1"
                />
              ))}
            </div>
            {skills.length >= 5 && (
              <SecondaryButton
                text={
                  mobileShowMoreSkills === "expanded"
                    ? "SHOW LESS"
                    : "SHOW MORE"
                }
                onClick={handleMobileShowMoreSkills}
              />
            )}
          </div>

          {/* PROJECTS (Mobile) */}
          <div
            style={{
              height: projectsHeight,
              transition: "height 0.5s ease-in-out",
              overflow: "hidden",
            }}
            className="flex flex-col items-center gap-5 bg-component1 rounded-xl p-3 shadow-md/30"
            ref={projectsRef}
          >
            <p className="text-text text-[24px] font-semibold">PROJECTS</p>
            <div className="w-full flex flex-col gap-3 3xl:gap-4">
              {mobileDisplayedProjects.map((project, index) => (
                <Card
                  key={index}
                  title={project.title || "empty"}
                  description={project.description || "empty"}
                  imageSource={project.imageSource || ""}
                  componentSource={project.componentSource || ""}
                  className="col-span-1"
                />
              ))}
            </div>
            {projects.length >= 5 && (
              <SecondaryButton
                text={
                  mobileShowMoreProjects === "expanded"
                    ? "SHOW LESS"
                    : "SHOW MORE"
                }
                onClick={handleMobileShowMoreProjects}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Craft;
