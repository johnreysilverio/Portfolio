import React from "react";

const Contact = () => {
  return (
    <>
      <button className="px-20 py-10 border-8 border-black text-4xl tracking-[1rem] font-bold my-10">
        CONTACTS
      </button>
      <div className="w-full flex justify-center px-[20rem]">
        <p className="text-center text-2xl my-10">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut
          consequatur corporis suscipit sed nulla officia iusto. Deserunt
          voluptate animi voluptatibus facere totam alias eos harum ea deleniti?
          Accusamus, ipsum necessitatibus?
        </p>
      </div>
      <div className="w-full flex flex-col justify-center items-center px-[20rem]">
        <input
          type="text"
          placeholder="Enter your Name*"
          id="visitor-name"
          className="border-l-4 border-black text-2xl my-10 p-2 w-[45rem] rounded"
        ></input>
        <input
          type="email"
          placeholder="Enter your Email*"
          id="visitor-email"
          className="border-l-4 border-black text-2xl my-10 p-2 w-[45rem] rounded"
        ></input>
        <input
          type="number"
          placeholder="Enter your Number*"
          id="visitor-num"
          className="border-l-4 border-black text-2xl my-10 p-2 w-[45rem] rounded"
        ></input>
        <textarea
          rows={2}
          placeholder="Enter Message"
          id="visitor-msg"
          className=" border-l-4 border-black text-2xl my-10 p-2 w-[45rem] rounded"
        ></textarea>
        <button className="border-x-4 border-black px-20 py-2 text-xl my-10">
          SUBMIT
        </button>
      </div>
    </>
  );
};

export default Contact;
