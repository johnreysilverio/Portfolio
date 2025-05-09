"use client";

import React, { useState } from "react";
import ButtonType2 from "../../components/buttons/ButtonType2";
import Card from "../../components/card/Card";
import { skills, projects } from "@/lib/cardData";
import { fillArrayToLength } from "@/lib/fillArrayToLength";
import { portfolioPlaceholder } from "@/lib/placeholders";

const Craft = () => {
  const [showMoreSkills, setShowMoreSkills] = useState(false);
  const [showMoreProjects, setShowMoreProjects] = useState(false);

  const filledSkills = fillArrayToLength(skills, 4, portfolioPlaceholder);
  const filledProjects = fillArrayToLength(projects, 4, portfolioPlaceholder);

  const displayedSkills = showMoreSkills
    ? filledSkills
    : filledSkills.slice(0, 4);
  const displayedProjects = showMoreProjects
    ? filledProjects
    : filledProjects.slice(0, 4);

  const handleShowMoreSkills = () => {
    setShowMoreSkills(!showMoreSkills);
    setShowMoreProjects(false);
  };

  const handleShowMoreProjects = () => {
    setShowMoreProjects(!showMoreProjects);
    setShowMoreSkills(false);
  };

  return (
    <div
      className="bg-background1 bg-cover bg-center min-h-screen flex justify-center items-center px-10 pb-10 pt-[90px] transition-all duration-200"
      id="craft"
    >
      <div className="w-[417px] sm:w-[746px] md:w-[1280px] 3xl:w-[1650px] h-full z-10 flex flex-col items-center justify-center">
        <p className="text-[48px] text-highlight font-bold ">CRAFTS</p>
        <div className="flex flex-col xl:flex-row w-full text-center gap-3 mt-5 transition-all duration-500">
          {/* Skills Section */}
          <div
            className={`flex flex-col items-center gap-5 bg-component1 rounded-xl p-3 shadow-md/30 transition-all duration-500 ease-in-out overflow-hidden`}
            style={{
              flex: showMoreSkills ? 3 : showMoreProjects ? 1 : 2,
              transition: "flex 0.5s ease-in-out",
            }}
          >
            <p className="text-text text-[36px]">SKILLS</p>
            <div className="w-full grid grid-cols-2 gap-3 3xl:gap-4 grid-flow-dense">
              {displayedSkills.map((skill, index) => (
                <Card
                  key={index}
                  title={skill.title || "empty"}
                  description={skill.description || "empty"}
                  imageSource={skill.imageSource || ""}
                  componentSource={skill.componentSource || ""}
                  className={`${showMoreSkills ? "col-span-1" : "col-span-2"}`}
                  style={{ gridRow: `${(index % 4) + 1}` }}
                />
              ))}
            </div>
            <ButtonType2
              text={showMoreSkills ? "SHOW LESS" : "SHOW MORE"}
              onClick={handleShowMoreSkills}
            />
          </div>

          {/* Projects Section */}
          <div
            className={`flex flex-col items-center gap-5 bg-component1 rounded-xl p-3 shadow-md/30 transition-all duration-500 ease-in-out overflow-hidden`}
            style={{
              flex: showMoreProjects ? 3 : showMoreSkills ? 1 : 2,
              transition: "flex 0.5s ease-in-out",
            }}
          >
            <p className="text-text text-[36px]">PROJECTS</p>
            <div className="w-full grid grid-cols-2 gap-3 3xl:gap-4 grid-flow-dense">
              {displayedProjects.map((project, index) => (
                <Card
                  key={index}
                  title={project.title || "empty"}
                  description={project.description || "empty"}
                  imageSource={project.imageSource || ""}
                  componentSource={project.componentSource || ""}
                  className={`${
                    showMoreProjects ? "col-span-1" : "col-span-2"
                  }`}
                  style={{ gridRow: `${(index % 4) + 1}` }}
                />
              ))}
            </div>
            <ButtonType2
              text={showMoreProjects ? "SHOW LESS" : "SHOW MORE"}
              onClick={handleShowMoreProjects}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Craft;
