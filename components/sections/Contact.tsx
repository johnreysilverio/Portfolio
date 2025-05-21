import React from "react";
import Image from "next/image";
import SecondaryButton from "../buttons/SecondaryButton";
import {
  FaUser,
  FaEnvelope,
  FaPhoneAlt,
  FaCommentDots,
  FaMapMarkerAlt,
} from "react-icons/fa";

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
        <div className="grid grid-cols-2 items-center gap-5 mt-5">
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
          <div className="bg-component1 w-full h-full p-3 rounded-xl flex flex-col gap-4 3xl:gap-8 items-center col-span-2 xl:col-span-1 xl:order-1 shadow-md/30 transition-all duration-200">
            <div className="text-text text-center">
              <p className="text-[32px] font-bold">Get in Touch</p>
              <p className="text-[16px] mt-3 3xl:mt-5">
                Get in touch with me for any kind of help. I am here to give you
                the best and also here to help you to find your projects.
              </p>
            </div>
            <div className="bg-component2 rounded-md flex p-2 gap-2 xl:p-3 xl:gap-2 3xl:p-5 3xl:gap-5 shadow-md/30 w-full mt-3 3xl:mt-5">
              <div className="flex justify-center items-center w-[24px] h-[24px] p-2">
                <FaUser className="absolute !w-7 !h-7 text-text" />
              </div>
              <input
                type="text"
                className="w-full text-text text-[16px]"
                placeholder="Your Name"
              ></input>
            </div>

            <div className="bg-component2 rounded-md flex p-2 gap-2 xl:p-3 xl:gap-2 3xl:p-5 3xl:gap-5 shadow-md/30 w-full">
              <div className="flex justify-center items-center w-[24px] h-[24px] p-2">
                <FaEnvelope className="absolute !w-7 !h-7 text-text" />
              </div>
              <input
                type="email"
                className="w-full text-text text-[16px]"
                placeholder="Your Email"
              ></input>
            </div>

            <div className="bg-component2 rounded-md flex p-2 gap-2 xl:p-3 xl:gap-2 3xl:p-5 3xl:gap-5 shadow-md/30 w-full">
              <div className="flex justify-center items-center w-[24px] h-[24px] p-2">
                <FaPhoneAlt className="absolute !w-7 !h-7 text-text" />
              </div>
              <input
                type="tel"
                className="w-full text-text text-[16px]"
                placeholder="Phone Number"
              ></input>
            </div>

            <div className="bg-component2 rounded-md flex p-2 gap-2 xl:p-3 xl:gap-2 3xl:p-5 3xl:gap-5 shadow-md/30 justify-start items-start w-full">
              <div className="flex justify-center items-center w-[24px] h-[24px] p-2">
                <FaCommentDots className="absolute !w-7 !h-7 text-text" />
              </div>
              <textarea
                rows={4}
                className="w-full text-text text-[16px] resize-none"
                placeholder="Message"
              ></textarea>
            </div>
            <div className="xl:pt-2">
              <SecondaryButton text="SEND MESSAGE" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
