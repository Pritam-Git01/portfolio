"use client";

import { TypewriterEffectSmooth } from "./ui/typewriter-effect";

export default function TypeWriter() {
  const words = [
    {
      text: "Pritam",
      className:
        "text-transparent bg-clip-text bg-linear-to-r from-blue-500 to-purple-600",
    },
    {
      text: "Kumar",
      className:
        "text-transparent bg-clip-text bg-linear-to-r from-blue-500 to-purple-600",
    },
    {
      text: "Yadav",
      className:
        "text-transparent bg-clip-text bg-linear-to-r from-blue-500 to-purple-600",
    },
  ];

  console.log(words);
  return (
    <div className="">
      <TypewriterEffectSmooth words={words} />
    </div>
  );
}
