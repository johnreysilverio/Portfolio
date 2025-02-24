import React from "react";
import Image from "next/image";
const Navbar = () => {
  return (
    <>
      <nav className="w-full flex justify-center p-0 sticky top-0 z-50">
        <div className="w-[1700px] flex justify-between items-center py-5">
          <a href="#home">
            <div className="bg-white rounded bg-opacity-70 p-1 hover:bg-gray-300 transition-all">
              <Image
                src="/images/JRSilverio Logo.png"
                alt="JRSilverio Logo"
                width={100}
                height={100}
                className="cursor-pointer"
              />
            </div>
          </a>
          <ul className="bg-[#191919] bg-opacity-70 p-1 rounded-full flex space-x-[1.5rem] justify-between text-xl font-bold text-[#C0C0C0]">
            <li className="hover:bg-[#2F2F2F] hover:bg-opacity-70 px-5 py-2 rounded-full transition-all">
              <a href="#about">About</a>
            </li>
            <li className="hover:bg-[#2F2F2F] hover:bg-opacity-70 px-5 py-2 rounded-full transition-all">
              <a href="#skills">Skills</a>
            </li>
            <li className="hover:bg-[#2F2F2F] hover:bg-opacity-70 px-5 py-2 rounded-full transition-all">
              <a href="#certificates">Certificates</a>
            </li>
            <li className="hover:bg-[#2F2F2F] hover:bg-opacity-70 px-5 py-2 rounded-full transition-all">
              <a href="#projects">Projects</a>
            </li>
            <li className="hover:bg-[#2F2F2F] hover:bg-opacity-70 px-5 py-2 rounded-full transition-all">
              <a href="#contacts">Contact Me</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
