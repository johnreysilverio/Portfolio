import React from "react";
import Image from "next/image";

const Home = () => {
  return (
    <>
      <div
        id="home"
        className="h-[910px] bg-[url('/images/NEWERBG.png')] bg-cover bg-center flex justify-center mt-[-148px]"
      >
        <div className="w-[1500px] h-[910px] flex justify-between">
          <div className="w-[45%] flex justify-center p-1">
            <div className="flex justify-center items-start flex-col space-y-5">
              <p className="text-3xl font-bold">Hi, I am</p>
              <p className="text-8xl font-bold">John Rey Silverio</p>
              <p className="text-2xl font-bold text-gray-400">
                Bachelor in Science in Information Technology - HCDC
              </p>
              <div className="h-[10rem] w-full">
                <div className="flex w-[45%] justify-between items-center mt-[10rem]">
                  <a
                    href="https://x.com/JReySilverio"
                    target="_blank"
                    className="bg-gray-200 p-2 shadow-md rounded-md hover:bg-gray-300"
                  >
                    <Image
                      src="/images/twitter.png"
                      alt="arroba"
                      width={40}
                      height={40}
                      className="cursor-pointer"
                    />
                  </a>

                  <a
                    href="https://github.com/johnreysilverio"
                    target="_blank"
                    className="bg-gray-200 p-2 shadow-md rounded-md hover:bg-gray-300"
                  >
                    <Image
                      src="/images/github.png"
                      alt="github"
                      width={40}
                      height={40}
                      className="cursor-pointer"
                    />
                  </a>

                  <a
                    href="https://linkedin.com/in/jrsilverio17"
                    target="_blank"
                    className="bg-gray-200 p-2 shadow-md rounded-md hover:bg-gray-300"
                  >
                    <Image
                      src="/images/linkedin.png"
                      alt="linked in"
                      width={40}
                      height={40}
                      className="cursor-pointer"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[10%] flex justify-center items-end ">
            <p className="text-white text-6xl">--</p>
            <div className="flex flex-col relative justify-start items-center animate-bounce">
              <p className="absolute text-white text-2xl mt-[4px]">V</p>
              <p className="text-white text-6xl">V</p>
            </div>
            <p className="text-white text-6xl">--</p>
          </div>
          <div className="w-[45%] flex justify-end items-end">
            <div>
              <Image
                src="/images/newprofilepic.png"
                alt="profile pic"
                width={1000}
                height={600}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#1D1D1D] w-full h-[550px] py-10 flex justify-center overflow-hidden relative">
        <div className="flex w-[1700px] justify-center">
          <div className="space-y-10 w-[55%]">
            <p className="text-white text-6xl">Holy Cross of Davao College</p>
            <p className="text-white text-2xl text-justify">
              Holy Cross of Davao College (HCDC) is a private Catholic
              educational institution in Davao City, Philippines, founded in
              1951. It is committed to providing values-based and quality
              education rooted in Catholic teachings. HCDC offers various
              undergraduate and graduate programs, including business,
              education, engineering, information technology, and criminology.
              The school emphasizes academic excellence, character formation,
              and community service, preparing students for both professional
              careers and social responsibility. Over the years, HCDC has grown
              into a respected institution, producing graduates who contribute
              to different industries. Its mission is to foster holistic
              development through faith, knowledge, and service to others.
            </p>

            <p className="text-white text-3xl">READ MORE</p>
          </div>
          <div className="w-[45%] flex justify-end items-center">
            <div>
              <Image
                src="/images/hcdclogo.png"
                alt="profile pic"
                width={500}
                height={600}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
