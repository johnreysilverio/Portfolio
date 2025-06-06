"use client";

//import React, { useEffect } from "react";
import Portfolio from "./Portfolio/page";

const Page = () => {
  /* useEffect(() => {
    const threeScript = document.createElement("script");
    const waveScript = document.createElement("script");

    threeScript.setAttribute("id", "threeScript");
    waveScript.setAttribute("id", "waveScript");

    threeScript.setAttribute(
      "src",
      "https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js"
    );
    waveScript.setAttribute(
      "src",
      "https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.waves.min.js"
    );

    document.getElementsByTagName("head")[0].appendChild(threeScript);
    document.getElementsByTagName("head")[0].appendChild(waveScript);
    return () => {
      if (threeScript) {
        threeScript.remove();
      }
      if (waveScript) {
        waveScript.remove();
      }
    };
  }, []); */

  return (
    <div>
      <Portfolio />
    </div>
  );
};

export default Page;
