"use client";
import React from "react";

const Contact = () => {
  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "d31dd9e0-3b50-4ffe-a3a8-c47fd0323773");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    });
    const result = await response.json();
    if (result.success) {
      console.log(result);
      window.alert("Message Sent Successfuly");
    } else {
      window.alert("Message Sent Failed, Please Try Again Later");
    }
  }
  return (
    <>
      <div id="contacts" className="w-full flex justify-center">
        <div className="w-[1500px] flex flex-col justify-center items-center">
          <button className="px-20 py-10 border-8 border-black text-4xl tracking-[1rem] font-bold my-10">
            CONTACTS
          </button>
          <div className="w-full flex justify-center px-[20rem]">
            <p className="text-center text-2xl my-10">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut
              consequatur corporis suscipit sed nulla officia iusto. Deserunt
              voluptate animi voluptatibus facere totam alias eos harum ea
              deleniti? Accusamus, ipsum necessitatibus?
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="w-full flex flex-col justify-center items-center px-[20rem]">
              <input
                required
                type="text"
                name="name"
                placeholder="Enter your Name*"
                className="border-l-4 border-black text-2xl my-5 p-2 w-[45rem] rounded"
              ></input>
              <input
                required
                type="email"
                name="email"
                placeholder="Enter your Email*"
                className="border-l-4 border-black text-2xl my-5 p-2 w-[45rem] rounded"
              ></input>

              <textarea
                required
                rows={2}
                placeholder="Enter Message"
                name="message"
                className=" border-l-4 border-black text-2xl my-5 p-2 w-[45rem] rounded"
              ></textarea>
              <button className="border-x-4 border-black px-20 py-2 text-xl mt-5 mb-20">
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
