import React from "react";
import Image from "next/image";
import { AiOutlineFacebook } from "react-icons/ai";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const Home = () => {
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
        <div className="flex h-screen  justify-between px-[15rem] mt-[10rem]">
          <div className="flex justify-center items-start flex-col space-y-5">
            <p className="text-3xl font-bold">Hi, I am</p>
            <p className="text-8xl font-bold">John Rey Silverio</p>
            <p className="text-2xl font-bold text-gray-400">
              Front-end Developer
            </p>
            <div className="h-[10rem] w-full">
              <div className="flex w-[45%] justify-between items-center mt-[10rem]">
                <button className="bg-gray-200 p-2 shadow-md rounded-md">
                  <Image
                    src="/images/arroba.png"
                    alt="arroba"
                    width={40}
                    height={40}
                    className="cursor-pointer"
                  />
                </button>

                <button className="bg-gray-200 p-2 shadow-md rounded-md">
                  <Image
                    src="/images/github.png"
                    alt="github"
                    width={40}
                    height={40}
                    className="cursor-pointer"
                  />
                </button>

                <button className="bg-gray-200 p-2 shadow-md rounded-md">
                  <Image
                    src="/images/linkedin.png"
                    alt="linked in"
                    width={40}
                    height={40}
                    className="cursor-pointer"
                  />
                </button>
              </div>
            </div>
          </div>
          <div>
            <Image
              src="/images/profilepic.jpg"
              alt="profile pic"
              width={700}
              height={400}
            />
          </div>
        </div>

        <div className="bg-[#1D1D1D] w-full p-10 px-20 mt-[7rem]">
          <div className="space-y-10">
            <p className="text-white text-6xl">It Berries</p>
            <p className="text-white text-2xl text-justify">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam a
              aspernatur, fuga laborum quos cupiditate nemo nihil temporibus
              deserunt ducimus sapiente similique natus quis ea odit. Cumque
              deserunt molestiae sed saepe sapiente in, unde blanditiis velit id
              eius itaque eligendi doloribus sit error vero excepturi,
              recusandae architecto? Dolorem, perspiciatis, earum sit ducimus
              modi eum reiciendis dolores dolorum voluptates impedit harum nobis
              mollitia. Assumenda ex molestiae dolore repellendus saepe libero
              recusandae iusto! Eum debitis quo, nam iure cupiditate possimus
              iusto nemo officia quam, nisi recusandae quidem dignissimos sequi
              obcaecati tempore pariatur eveniet ullam laudantium excepturi?
              Eius beatae quam tempora praesentium quibusdam?
            </p>
            <p className="text-white text-3xl">READ MORE</p>
          </div>
        </div>
        <div>
          <div
            className="flex flex-col justify-center items-center mt-[100px] py-10"
            id="about"
          >
            <button className="px-20 py-10 border-8 border-black text-4xl tracking-[1rem] font-bold my-10">
              ABOUT ME
            </button>
            <p className="my-10 text-xl px-[20rem] text-center">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
              consequuntur modi mollitia! Ad deleniti vitae optio rerum
              voluptatem, nihil accusantium? Beatae at alias deleniti debitis.
              Aut consequuntur ratione laudantium dolor!
            </p>
            <button className="border-x-4 border-black px-20 py-2 text-xl my-10">
              EXPLORE
            </button>
            <div className="w-full px-[20rem] my-10">
              <div className=" flex justify-between mb-10">
                <div className="w-[45%]">
                  <p className="text-2xl font-bold">DESIGN</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iure voluptate ratione quo dicta quaerat doloremque nesciunt
                    quam similique rem in, esse dolore, alias voluptatum
                    veritatis officiis dolorem dolor quasi eligendi.
                  </p>
                </div>
                <div className="w-[45%]">
                  <p className="text-2xl font-bold">DEVELOPMENT</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iure voluptate ratione quo dicta quaerat doloremque nesciunt
                    quam similique rem in, esse dolore, alias voluptatum
                    veritatis officiis dolorem dolor quasi eligendi.
                  </p>
                </div>
              </div>
              <div className="w-full justify-center items-center flex">
                <div className="w-[50%]">
                  <p className="text-2xl font-bold">MAINTENANCE</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iure voluptate ratione quo dicta quaerat doloremque nesciunt
                    quam similique rem in, esse dolore, alias voluptatum
                    veritatis officiis dolorem dolor quasi eligendi.
                  </p>
                </div>
              </div>
            </div>
            <div id="skills">
              <button className="px-20 py-10 border-8 border-black text-4xl tracking-[1rem] font-bold my-10">
                SKILLS
              </button>
            </div>
          </div>
          <div className="px-[20rem]">
            <div>
              <p className="tracking-[.5rem] text-4xl font-bold my-[100px]">
                USING NOW:
              </p>
            </div>
            <div className="flex w-full justify-around">
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
          <div className="px-[20rem]">
            <div>
              <p className="tracking-[.5rem] text-4xl font-bold my-[100px]">
                LEARNING:
              </p>
            </div>
            <div className="flex w-full justify-around">
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
          <div className="px-[20rem]">
            <div>
              <p className="tracking-[.5rem] text-4xl font-bold my-[100px]">
                OTHER SKILLS:
              </p>
            </div>
            <div className="flex w-full justify-around">
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
          <div
            id="projects"
            className="w-full bg-[#545353] flex justify-center mt-[10rem]"
          >
            <button className="px-20 py-10 border-8 border-black text-4xl tracking-[1rem] font-bold my-10">
              PROJECTS
            </button>
          </div>
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
          <div
            id="contacts"
            className="w-full flex item-center justify-center mt-[10rem]"
          >
            <button className="px-20 py-10 border-8 border-black text-4xl tracking-[1rem] font-bold my-10">
              CONTACTS
            </button>
          </div>
          <div className="w-full flex justify-center px-[20rem]">
            <p className="text-center text-2xl my-10">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut
              consequatur corporis suscipit sed nulla officia iusto. Deserunt
              voluptate animi voluptatibus facere totam alias eos harum ea
              deleniti? Accusamus, ipsum necessitatibus?
            </p>
          </div>
          <div className="w-full flex flex-col justify-center items-center px-[20rem]">
            <input
              type="text"
              placeholder="Enter your Name*"
              id="name"
              className="border-b-4 border-l-4 border-black text-2xl my-10 p-2 w-[45rem]"
            ></input>
            <input
              type="email"
              placeholder="Enter your Email*"
              id="email"
              className="border-b-4 border-l-4 border-black text-2xl my-10 p-2 w-[45rem]"
            ></input>
            <input
              type="number"
              placeholder="Enter your Number*"
              id="name"
              className="border-b-4 border-l-4 border-black text-2xl my-10 p-2 w-[45rem]"
            ></input>
            <textarea
              rows={5}
              placeholder="Enter Message"
              id="name"
              className="border-b-4 border-l-4 border-black text-2xl my-10 p-2 w-[45rem]"
            ></textarea>
            <button className="border-x-4 border-black px-20 py-2 text-xl my-10">
              SUBMIT
            </button>
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

export default Home;
