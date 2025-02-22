import React from "react";

const AboutMe = () => {
  return (
    <>
      <div id="about" className="w-full flex justify-center mt-[10rem]">
        <div className="w-[1500px] flex flex-col justify-center items-center">
          <button className="px-20 py-10 border-8 border-black text-4xl tracking-[1rem] font-bold my-10">
            ABOUT ME
          </button>
          <p className="my-10 text-xl px-[20rem] text-center">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
            consequuntur modi mollitia! Ad deleniti vitae optio rerum
            voluptatem, nihil accusantium? Beatae at alias deleniti debitis. Aut
            consequuntur ratione laudantium dolor!
          </p>
          <button className="border-x-4 border-black px-20 py-2 text-xl my-10">
            EXPLORE
          </button>
          <div className="w-full my-10">
            <div className=" flex justify-between mb-10">
              <div className="w-[45%]">
                <p className="text-2xl font-bold">DESIGN</p>
                <p className="text-justify">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                  voluptate ratione quo dicta quaerat doloremque nesciunt quam
                  similique rem in, esse dolore, alias voluptatum veritatis
                  officiis dolorem dolor quasi eligendi.
                </p>
              </div>
              <div className="w-[45%]">
                <p className="text-2xl font-bold">DEVELOPMENT</p>
                <p className="text-justify">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                  voluptate ratione quo dicta quaerat doloremque nesciunt quam
                  similique rem in, esse dolore, alias voluptatum veritatis
                  officiis dolorem dolor quasi eligendi.
                </p>
              </div>
            </div>
            <div className="w-full justify-center items-center flex">
              <div className="w-[50%]">
                <p className="text-2xl font-bold">MAINTENANCE</p>
                <p className="text-justify">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                  voluptate ratione quo dicta quaerat doloremque nesciunt quam
                  similique rem in, esse dolore, alias voluptatum veritatis
                  officiis dolorem dolor quasi eligendi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
