import React from "react";
import { AiOutlineFacebook } from "react-icons/ai";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import Home from "./components/home";
import AboutMe from "./components/aboutMe";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Contact from "./components/contact";

const Portfolio = () => {
  return (
    <>
      <nav
        id="home"
        className="flex w-full justify-between py-10 px-[15rem] absolute top-0"
      >
        <div>
          <h1>LOGO</h1>
        </div>
        <ul className="flex space-x-20 justify-between text-xl font-bold">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contacts">Contact Me</a>
          </li>
        </ul>
      </nav>

      <main>
        <Home />

        <div>
          <div
            className="flex flex-col justify-center items-center mt-[100px] py-10"
            id="about"
          >
            <AboutMe />
          </div>

          <div
            className="flex flex-col justify-center items-center mt-[100px] py-10"
            id="skills"
          >
            <Skills />
          </div>

          <div
            id="projects"
            className="flex flex-col justify-center items-center mt-[100px] py-10"
          >
            <Projects />
          </div>

          <div
            id="contacts"
            className="flex flex-col justify-center items-center mt-[100px] py-10"
          >
            <Contact />
          </div>
        </div>
      </main>
      <footer>
        <div className="w-full bg-[#1A1A1A] flex flex-col items-center justify-center">
          <a className="px-20 py-2 text-2xl text-gray-200 my-5" href="#home">
            Back to Top
          </a>
          <div className="flex my-5 gap-5">
            <AiOutlineFacebook className="text-white text-5xl" />
            <CiLinkedin className="text-white text-5xl" />
            <FaInstagram className="text-white text-5xl" />
            <MdOutlineEmail className="text-white text-5xl" />
          </div>
          <p className="px-20 py-2 text-2xl text-gray-200 my-5">
            @2025 John Rey Silverio All Rights Reserve
          </p>
        </div>
      </footer>
    </>
  );
};

export default Portfolio;
