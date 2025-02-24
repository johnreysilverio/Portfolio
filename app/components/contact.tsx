"use client";
import React from "react";
import { useState } from "react";

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

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
      window.alert("Message Sent Successfully");
      setName("");
      setEmail("");
      setMessage("");
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
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                type="text"
                name="name"
                placeholder="Enter your Name*"
                className="border-l-4 border-black text-2xl my-5 py-2 px-[1rem] w-[45rem] rounded"
              ></input>
              <input
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                type="email"
                name="email"
                placeholder="Enter your Email*"
                className="border-l-4 border-black text-2xl my-5 py-2 px-[1rem] w-[45rem] rounded"
              ></input>

              <textarea
                required
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                rows={2}
                placeholder="Enter Message"
                name="message"
                className=" border-l-4 border-black text-2xl my-5 py-2 px-[1rem] w-[45rem] rounded"
              ></textarea>
              <button
                className="border-x-4 border-black px-20 py-2 px-[1rem] text-xl mt-5 mb-20 hover:bg-[#2F2F2F] hover:bg-opacity-10"
              >
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
