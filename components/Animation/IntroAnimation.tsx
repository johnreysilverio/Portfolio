"use client";

import { useEffect, useState } from "react";

export default function IntroAnimation({
  onComplete,
}: {
  onComplete: () => void;
}) {
  const [lines, setLines] = useState<string[]>([]);
  const [done, setDone] = useState(false);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const isReturning = localStorage.getItem("hasVisited") === "true";

    // Define intro lines with optional labels and values
    const intro = isReturning
      ? [
          { line: "initialize JohnReyPortfolio" },
          { line: "Welcome Back Viewer" },
        ]
      : [
          { line: "initialize JohnReyPortfolio" },
          { label: ">username:", value: "jrsportfolio" },
          { label: ">password:", value: "*******" },
        ];

    const newLines: string[] = [];
    let currentLineIndex = 0;
    let currentText = "";

    const typeLine = () => {
      const current = intro[currentLineIndex];

      if (current.value !== undefined) {
        // For lines with label + value
        newLines.push(current.label + " "); // Show label instantly
        setLines([...newLines]);

        let charIndex = 0;
        const interval = setInterval(() => {
          currentText += current.value[charIndex];
          newLines[currentLineIndex] = current.label + " " + currentText;
          setLines([...newLines]);

          charIndex++;
          if (charIndex >= current.value.length) {
            clearInterval(interval);
            currentLineIndex++;
            currentText = "";
            if (currentLineIndex < intro.length) {
              setTimeout(typeLine, 300);
            } else {
              setTimeout(() => {
                setDone(true);
                setIsTyping(false);
                onComplete();
              }, 800);
            }
          }
        }, 50);
      } else {
        // For lines that should be fully typed
        newLines.push(""); // start an empty line
        setLines([...newLines]);

        let charIndex = 0;
        const interval = setInterval(() => {
          currentText += current.line[charIndex];
          newLines[currentLineIndex] = ">" + currentText;
          setLines([...newLines]);

          charIndex++;
          if (charIndex >= current.line.length) {
            clearInterval(interval);
            currentLineIndex++;
            currentText = "";
            if (currentLineIndex < intro.length) {
              setTimeout(typeLine, 300);
            } else {
              setTimeout(() => {
                setDone(true);
                setIsTyping(false);
                onComplete();
              }, 800);
            }
          }
        }, 50);
      }
    };

    setTimeout(() => typeLine(), 300);

    localStorage.setItem("hasVisited", "true");

    return () => {};
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-background1 text-highlight font-mono flex items-center justify-center z-50">
      <div className="w-[40rem] h-[20rem] bg-component1 overflow-hidden">
        <div className="p-4 text-xl leading-relaxed whitespace-pre-wrap">
          {lines.map((line, i) => (
            <div key={i} className="relative">
              <p>{line}</p>
              {isTyping && !done && i === lines.length - 1 && (
                <span className="absolute right-0 top-0 border-r-2 border-green-400 animate-pulse" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
