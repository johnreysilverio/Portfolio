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
import Image from "next/image";

const Portfolio = () => {
  return (
    <>
      <nav
        id="home"
        className="flex w-full justify-between items-center py-5 px-[15rem] absolute top-0"
      >
        <div>
          <Image
            src="/images/JRSilverio Logo.png"
            alt="JRSilverio Logo"
            width={100}
            height={100}
            className="cursor-pointer"
          />
        </div>
        <ul className="flex space-x-20 justify-between text-xl font-bold text-[#C0C0C0]">
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
            <a
              href="https://www.facebook.com/john.rey.jose.silverio"
              target="_blank"
              className="cursor-pointer"
            >
              <AiOutlineFacebook className="text-white text-5xl" />
            </a>
            <a
              href="https://linkedin.com/in/jrsilverio17"
              target="_blank"
              className="cursor-pointer"
            >
              <CiLinkedin className="text-white text-5xl" />
            </a>
            <a
              href="https://www.instagram.com/slverio.jr/?igsh=MTFuOTZnaWN1dzYwcQ%3D%3D#"
              target="_blank"
              className="cursor-pointer"
            >
              <FaInstagram className="text-white text-5xl" />
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=johnrey.silverio.p@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              <MdOutlineEmail className="text-white text-5xl" />
            </a>
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
