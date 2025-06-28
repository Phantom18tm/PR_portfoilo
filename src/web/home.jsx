import React from "react";
import { BackgroundLines } from "../components/background.tsx";
import { TextHoverEffect } from "../components/reveal.tsx";
import { FlipWords } from "../components/change.tsx";

export function BackgroundLinesDemo() {
  const words = ["Designing.", "Thinking.", "Coding.", "Learning."];

  return (
    <BackgroundLines id="home" className="flex flex-col items-center justify-center w-full min-h-screen px-4 sm:px-6 md:px-10">
      
    
      <div className="w-full h-full flex items-center justify-center text-center relative z-20 pt-20 md:pt-40 lg:pt-52">
        <div className=" text-[48px] sm:text-[60px] md:text-[80px] lg:text-[100px] xl:text-[120px] font-extrabold text-white leading-tight">
          <TextHoverEffect text="Pratham" />
        </div>
      </div>

     
      <div className="min-h-[30rem] w-full flex flex-col items-center justify-center px-4 text-center">
        <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-Michroma text-neutral-600 dark:text-neutral-400 max-w-3xl pb-20 sm:pb-32 md:pb-40">
          Creative <FlipWords words={words} />
          <br />
          Building seamless digital experiences <br />
          from front to back.

        
          <div className="flex justify-center pt-8 animate-pulse">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="tabler-icon tabler-icon-arrow-down animate-bounce"
            >
              <path d="M12 5l0 14"></path>
              <path d="M18 13l-6 6"></path>
              <path d="M6 13l6 6"></path>
            </svg>
          </div>
        </div>
      </div>
    </BackgroundLines>
  );
}
