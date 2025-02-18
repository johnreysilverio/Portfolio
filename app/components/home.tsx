import React from "react";
import Image from "next/image";

const Home = () => {
  return (
    <>
      <div className="flex h-[910px]  justify-between px-[15rem] bg-[url('/images/HomeBG.png')] bg-cover bg-center">
        <div className="flex justify-center items-start flex-col space-y-5">
          <p className="text-3xl font-bold">Hi, I am</p>
          <p className="text-8xl font-bold">John Rey Silverio</p>
          <p className="text-2xl font-bold text-gray-400">
            Full-stack Developer
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
        <div className="">
          <Image
            src="/images/profilepic.jpg"
            alt="profile pic"
            width={700}
            height={400}
          />
        </div>
      </div>
      <div className="bg-[#1D1D1D] w-full p-10 px-20 ">
        <div className="space-y-10">
          <p className="text-white text-6xl">It Berries</p>
          <p className="text-white text-2xl text-justify">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam a
            aspernatur, fuga laborum quos cupiditate nemo nihil temporibus
            deserunt ducimus sapiente similique natus quis ea odit. Cumque
            deserunt molestiae sed saepe sapiente in, unde blanditiis velit id
            eius itaque eligendi doloribus sit error vero excepturi, recusandae
            architecto? Dolorem, perspiciatis, earum sit ducimus modi eum
            reiciendis dolores dolorum voluptates impedit harum nobis mollitia.
            Assumenda ex molestiae dolore repellendus saepe libero recusandae
            iusto! Eum debitis quo, nam iure cupiditate possimus iusto nemo
            officia quam, nisi recusandae quidem dignissimos sequi obcaecati
            tempore pariatur eveniet ullam laudantium excepturi? Eius beatae
            quam tempora praesentium quibusdam?
          </p>
          <p className="text-white text-3xl">READ MORE</p>
        </div>
      </div>
    </>
  );
};

export default Home;
