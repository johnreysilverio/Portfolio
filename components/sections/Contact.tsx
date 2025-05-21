import Image from "next/image";

import GetInTouch from "./GetInTouch";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div
      className="min-h-screen w-full bg-background2 flex justify-center items-center px-10 pt-13 pb-10 transition-all duration-200"
      id="contact"
    >
      <div className="w-[417px] sm:w-[746px] md:w-[1280px] 3xl:w-[1650px] flex flex-col items-center justify-center">
        <p className="text-highlight text-[40px] sm:text-[48px] font-bold">
          CONTACT
        </p>
        <div className="grid grid-cols-2 items-center gap-2 mt-5">
          <div className="flex flex-col gap-5 col-span-2 xl:col-span-1 xl:order-2 xl:px-30">
            <p className="text-text text-center text-[32px] sm:text-[36px] font-bold">
              Reach Out
            </p>
            <div className="flex flex-col gap-3 3xl:gap-5">
              <div className="flex gap-5 md:gap-10">
                <div className="flex justify-center items-center w-[48px] h-[48px] bg-component2 rounded-xl p-2">
                  <FaPhoneAlt className="absolute !w-8 !h-8 text-text" />
                </div>
                <div className="text-text text-[16px]">
                  <p>Phone</p>
                  <p>+63 930 629 7787</p>
                </div>
              </div>
              <div className="flex gap-5 md:gap-10">
                <div className="flex justify-center items-center w-[48px] h-[48px] bg-component2 rounded-xl p-2">
                  <FaEnvelope className="absolute !w-8 !h-8 text-text" />
                </div>
                <div className="text-text text-[16px]">
                  <p>Mail</p>
                  <p className="underline">johnrey.silverio.p@gmail.com</p>
                </div>
              </div>
              <div className="flex gap-5 md:gap-10">
                <div className="flex justify-center items-center w-[48px] h-[48px] bg-component2 rounded-xl p-2">
                  <FaMapMarkerAlt className="absolute !w-8 !h-8 text-text" />
                </div>
                <div className="text-text text-[16px]">
                  <p>Location</p>
                  <p>
                    Island Garden City of Samal,
                    <br />
                    Davao Del Norte,
                    <br />
                    Mindanao, Philippines
                  </p>
                </div>
              </div>
              <div className="w-full shadow-md/30 rounded-xl">
                <Image
                  src="/png/location.png"
                  width={2000}
                  height={2000}
                  alt="Location"
                  className="w-full bg-component1 rounded-xl border border-highlight p-2"
                />
              </div>
            </div>
          </div>
          <div className="col-span-2 xl:col-span-1 xl:order-1 h-full">
            <GetInTouch />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
