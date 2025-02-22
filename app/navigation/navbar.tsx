import React from "react";
import Image from "next/image";
const Navbar = () => {
  return (
    <>
      <nav id="home" className="w-full flex justify-center p-0 absolute top-0">
        <div className="w-[1500px] flex justify-between items-center py-5">
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
              <a href="#certificates">Projects</a>
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
