import React from "react";

const Projects = () => {
  return (
    <>
      <button className="px-20 py-10 border-8 border-black text-4xl tracking-[1rem] font-bold my-10">
        PROJECTS
      </button>

      <div className="w-full bg-[#1A1A1A] flex justify-center">
        <button className="w-[20rem] border-b-4 border-white px-20 py-2 text-xl text-white font-bold my-10">
          ALL
        </button>
        <button className="w-[20rem] border-b-2 border-gray-200 px-20 py-2 text-xl text-gray-200 my-10">
          CODED
        </button>
        <button className=" w-[20rem] border-b-2 border-gray-200 px-20 py-2 text-xl text-gray-200 my-10">
          DESIGNED
        </button>
      </div>

      <div className="w-full bg-[#1A1A1A] flex justify-center">
        <p className="px-20 py-2 text-2xl text-gray-200 my-10">
          And many more to come!
        </p>
      </div>
    </>
  );
};

export default Projects;
