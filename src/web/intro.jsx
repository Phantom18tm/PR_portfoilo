import { ShootingStars } from "../components/shootingstar.tsx";
import { FlipWords } from "../components/change.tsx";
import pho from "../assets/pho.jpg";

"use client";

export function Shooting() {
  const my = ["Me", "Tech_Enthusiast", "Devloper", "Explorer"];

  return (
    <div id="intro" className="min-h-screen bg-black flex flex-col items-center justify-center relative w-full px-4 py-10">
      
      {/* Container for Text + Image */}
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-10 font-Michroma">

        {/* Text Block */}
        <div className="text-center md:text-left text-neutral-600 dark:text-neutral-400 flex-1">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4">
            A little about <FlipWords words={my} />
          </h2>

          <div className="font-sevillana text-base sm:text-lg md:text-xl text-neutral-400 dark:text-neutral-300 space-y-4">
            <p>
              Hi, I'm Pratham — a multidisciplinary creative blending web
              development, design, and storytelling into impactful digital
              experiences.
            </p>
            <p>
              I specialize in transforming ideas into elegant, intuitive websites and applications that don’t just look good — they work
              beautifully. My design-driven approach and love for clear,
              purposeful communication help me craft experiences that resonate
              with users and deliver results.
            </p>
            <p>
              Whether you’re building something from scratch or refining the
              details, I’m always open to fresh collaborations and bold
              projects. Let’s build something remarkable together.
            </p>
          </div>
        </div>

        {/* Image Block */}
        <div className="flex-shrink-0">
          <img
            src={pho}
            alt="Pratham"
            loading="lazy"
            className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded saturate-0 hover:saturate-100 transition-all duration-300 shadow-md object-cover relative z-10"
          />
        </div>
      </div>
      <div>
        <p className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-10 font-Michroma text-neutral-600 dark:text-neutral-400 text-center mt-30">
          "I build with purpose, code with vision, and learn with fire — because the future doesn’t wait, and neither do I."
        </p>
      </div>
      <div className="pt-10 md:pt-20 lg:pt-32 flex items-center justify-center w-full"><hr className="w-1/4 border-neutral-500 border-t"></hr><p className="mx-4 text-neutral-500">-</p><hr className="w-1/4 border-neutral-500 border-t"></hr></div>

      <ShootingStars />
    </div>
  );
}
