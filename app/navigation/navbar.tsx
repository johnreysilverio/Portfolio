import React from "react";
import Image from "next/image";
const Navbar = () => {
  return (
    <>
      <nav
        id="home"
        className="w-full flex justify-center p-0 sticky top-0 z-50"
      >
        <div className="w-[1700px] flex justify-between items-center py-5">
          <div className="bg-white bg-opacity-70 p-1">
            <Image
              src="/images/JRSilverio Logo.png"
              alt="JRSilverio Logo"
              width={100}
              height={100}
              className="cursor-pointer"
            />
          </div>
          <ul className="bg-[#191919] bg-opacity-70 p-[1rem] rounded-full flex space-x-[4rem] justify-between text-xl font-bold text-[#C0C0C0]">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#certificates">Certificates</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contacts">Contact Me</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
