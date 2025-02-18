import React from "react";
import Image from "next/image";

const Skills = () => {
  return (
    <>
      <button className="px-20 py-10 border-8 border-black text-4xl tracking-[1rem] font-bold my-10">
        SKILLS
      </button>
      <div>
        <div>
          <p className="tracking-[.5rem] text-4xl font-bold my-[100px]">
            USING NOW:
          </p>
        </div>
        <div className="flex w-full justify-around gap-[10rem]">
          <Image
            src="/images/html.png"
            alt="html"
            width={200}
            height={200}
            className="cursor-pointer"
          />
          <Image
            src="/images/css.png"
            alt="css"
            width={200}
            height={200}
            className="cursor-pointer"
          />
          <Image
            src="/images/javascript.png"
            alt="javascript"
            width={200}
            height={200}
            className="cursor-pointer"
          />
          <Image
            src="/images/git.png"
            alt="git bash"
            width={200}
            height={200}
            className="cursor-pointer"
          />
        </div>
      </div>

      <div>
        <div>
          <p className="tracking-[.5rem] text-4xl font-bold my-[100px]">
            LEARNING:
          </p>
        </div>
        <div className="flex w-full justify-around gap-[10rem]">
          <Image
            src="/images/nextjs.png"
            alt="next js"
            width={200}
            height={200}
            className="cursor-pointer"
          />
          <Image
            src="/images/tailwindcss.png"
            alt="Tailwind Css"
            width={200}
            height={200}
            className="cursor-pointer"
          />
          <Image
            src="/images/typescript.png"
            alt="typescript"
            width={200}
            height={200}
            className="cursor-pointer"
          />
          <Image
            src="/images/NestJS.png"
            alt="Nest JS"
            width={200}
            height={200}
            className="cursor-pointer"
          />
        </div>
      </div>

      <div className="">
        <div>
          <p className="tracking-[.5rem] text-4xl font-bold my-[100px]">
            OTHER SKILLS:
          </p>
        </div>
        <div className="flex w-full justify-around gap-[10rem]">
          <Image
            src="/images/csharp.png"
            alt="c sharp"
            width={200}
            height={200}
            className="cursor-pointer"
          />
          <Image
            src="/images/cplusplus.png"
            alt="c plus plus"
            width={200}
            height={200}
            className="cursor-pointer"
          />
          <Image
            src="/images/python.png"
            alt="python"
            width={200}
            height={200}
            className="cursor-pointer"
          />
          <Image
            src="/images/java.png"
            alt="java"
            width={200}
            height={200}
            className="cursor-pointer"
          />
        </div>
      </div>
    </>
  );
};

export default Skills;
