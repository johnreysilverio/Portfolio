import React from "react";
import Navbar from "./navigation/navbar";
import Home from "./components/home";
import AboutMe from "./components/aboutMe";
import Skills from "./components/skills";
import Certificates from "./components/certificates";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Footer from "./footer/footer";

const Portfolio = () => {
  return (
    <>
      <Navbar />
      <main>
        <Home />
        <AboutMe />
        <Skills />
        <Certificates />
        <Projects />
        <Contact />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Portfolio;
