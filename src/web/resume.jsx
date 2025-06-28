import { ShootingStars } from "../components/shootingstar.tsx";
import { FlipWords } from "../components/change.tsx";
import { HoverBorderGradient } from "../components/gradientbor.tsx";

"use client";

export function Resume() {
  const resu = ["Great_Coder?", "Innovator?", "Devloper?", "Designer?"];

  return (
    <div id="resume" className="min-h-screen bg-black flex flex-col items-center justify-center w-full px-4 sm:px-6 md:px-10 py-12 relative z-10">
     
      <div className="flex items-center justify-center w-full mb-8">
        <hr className="w-1/4 border-neutral-500" />
        <p className="mx-2 text-neutral-500">-</p>
        <hr className="w-1/4 border-neutral-500" />
      </div>


      <div className="min-h-[15rem] w-full flex flex-col items-center justify-center px-4 text-center mb-4">
        <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-Michroma text-neutral-600 dark:text-neutral-400 max-w-3xl">
          Looking for a <br />
          <FlipWords words={resu} />
        </div>
      </div>

    
      <p className="max-w-4xl font-Michroma text-neutral-600 dark:text-neutral-400 text-center text-base sm:text-lg px-4">
        Need it built? Crafted? Coded? ✨ Looking for a dev who delivers?
        That’s me. Let’s connect.
      </p>

    
      <div className="mt-8 flex justify-center">
        <HoverBorderGradient
          containerClassName="rounded-full"
          className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 font-Michroma px-6 py-2 text-sm sm:text-base"
        >
          <a
            href="https://www.canva.com/design/DAGT25exssU/2cYoGG9JKGH3amLWnSmaUQ/view"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </HoverBorderGradient>
      </div>

      <ShootingStars />
    </div>
  );
}
