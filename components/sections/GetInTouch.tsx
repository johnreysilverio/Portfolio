"use client";

import { useEffect, useRef, useState } from "react";
import type { FormEvent } from "react";
import SecondaryButton from "../buttons/SecondaryButton";
import { FaUser, FaEnvelope, FaPhoneAlt, FaCommentDots } from "react-icons/fa";

const GetInTouch = () => {
  const [rows, setRows] = useState(4);
  const formRef = useRef<HTMLFormElement | null>(null);
  const [status, setStatus] = useState<"success" | "error" | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const startedAt = useRef(Date.now());

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1900px)");
    const handleResize = () => {
      setRows(mediaQuery.matches ? 7 : 6);
    };

    handleResize();
    mediaQuery.addEventListener("change", handleResize);

    return () => {
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, []);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSubmitting) return;

    const formData = new FormData(event.currentTarget);
    const honeypot = String(formData.get("companyWebsite") ?? "");
    if (honeypot || Date.now() - startedAt.current < 3_000) {
      setStatus("success");
      formRef.current?.reset();
      return;
    }

    setIsSubmitting(true);
    setStatus(null);

    try {
      const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
      if (!accessKey) throw new Error("Web3Forms is not configured");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...Object.fromEntries(formData),
          access_key: accessKey,
          subject: `Portfolio inquiry from ${String(formData.get("name") ?? "visitor")}`,
          from_name: "John Rey Silverio Portfolio",
        }),
      });

      const result = await response.json();
      if (!response.ok || !result.success) throw new Error("Submission failed");
      setStatus("success");
      formRef.current?.reset();
      startedAt.current = Date.now();
    } catch {
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }

    setTimeout(() => {
      setStatus(null);
    }, 5000);
  };

  return (
    <form onSubmit={handleSubmit} ref={formRef} className="h-full">
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="company-website">Company website</label>
        <input id="company-website" name="companyWebsite" type="text" tabIndex={-1} autoComplete="off" />
        <input name="botcheck" type="checkbox" tabIndex={-1} />
      </div>
      <div className="bg-component1 w-full h-full p-3 rounded-xl flex flex-col gap-4 items-center col-span-2 xl:col-span-1 xl:order-1 shadow-md/30 transition-all duration-200">
        <div className="text-text text-center">
          <p className="text-[32px] font-bold">Get in Touch</p>
          <p className="text-[16px] mt-3 3xl:mt-5">
            Get in touch with me for any kind of help. I am here to give you the
            best and also here to help you to find your projects.
          </p>
        </div>

        <div className="bg-component2 rounded-md flex px-2 3xl:px-3 gap-2 shadow-md/30 w-full mt-3 items-center">
          <div className="flex justify-center items-center w-[24px] h-[24px] p-2">
            <FaUser className="absolute !w-7 !h-7 text-text" />
          </div>
          <input
            name="name"
            type="text"
            className="w-full text-text text-[16px] 3xl:text-[20px] p-2 3xl:p-3 outline-0"
            placeholder="Your Name"
            autoComplete="name"
            minLength={2}
            maxLength={80}
            required
          />
        </div>

        <div className="bg-component2 rounded-md flex px-2 3xl:px-3 gap-2 shadow-md/30 w-full items-center">
          <div className="flex justify-center items-center w-[24px] h-[24px] p-2">
            <FaEnvelope className="absolute !w-7 !h-7 text-text" />
          </div>
          <input
            name="email"
            type="email"
            className="w-full text-text text-[16px] 3xl:text-[20px] p-2 3xl:px-3 outline-0"
            placeholder="Your Email"
            autoComplete="email"
            maxLength={254}
            required
          />
        </div>

        <div className="bg-component2 rounded-md flex px-2 3xl:px-3 gap-2 shadow-md/30 w-full items-center">
          <div className="flex justify-center items-center w-[24px] h-[24px] p-2">
            <FaPhoneAlt className="absolute !w-7 !h-7 text-text" />
          </div>
          <input
            name="phone"
            type="tel"
            className="w-full text-text text-[16px] 3xl:text-[20px] p-2 3xl:px-3 outline-0"
            placeholder="Phone Number"
            autoComplete="tel"
            maxLength={30}
          />
        </div>

        <div className="bg-component2 rounded-md flex px-2 gap-2 3xl:px-3 shadow-md/30 justify-start items-start w-full">
          <div className="flex justify-center items-center w-[24px] h-[24px] p-2">
            <FaCommentDots className="absolute !w-7 !h-7 text-text mt-2 3xl:mt-3" />
          </div>
          <textarea
            name="message"
            rows={rows}
            className="w-full text-text text-[16px] 3xl:text-[20px] resize-none p-2 3xl:p-3 outline-0"
            placeholder="Message"
            minLength={10}
            maxLength={3000}
            required
          ></textarea>
        </div>

        <div className="xl:pt-2">
          <SecondaryButton
            text={isSubmitting ? "SENDING..." : "SEND MESSAGE"}
            type="submit"
            disabled={isSubmitting}
          />
        </div>

        {status === "success" && (
          <p role="status" className="text-green-500 text-sm font-medium">
            Message sent successfully!
          </p>
        )}
        {status === "error" && (
          <p role="alert" className="text-red-500 text-sm font-medium">
            Failed to send message. Please try again.
          </p>
        )}
      </div>
    </form>
  );
};

export default GetInTouch;
