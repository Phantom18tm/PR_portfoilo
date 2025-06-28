import { ShootingStars } from "../components/shootingstar.tsx";
import { FlipWords } from "../components/change.tsx";
import { HoverEffect } from "../components/cardhover.tsx";

"use client";

export function Project() {
  const probs = ["Build", "Create", "Developed", "Designed", "Innovate", "Craft", "Constructed"];

  return (
    <div id="project" className="pt-20 px-4 sm:px-6 md:px-10 w-full">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 font-Michroma">
        <div className="text-center md:text-left text-neutral-600 dark:text-neutral-400 flex-1">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-8 pt-20">
            Projects I <FlipWords words={probs} />
          </h2>
        </div>
      </div>
      <ShootingStars />
    </div>
  );
}

export function Cardhov() {
  return (
    <div
      id="projects"
      className="min-h-screen bg-black flex flex-col items-center justify-center w-full px-4 sm:px-6 md:px-10 py-13 relative z-10"
    >
      <div className="max-w-5xl w-full mx-auto font-Michroma">
        <HoverEffect items={projects} />
      </div>
      <ShootingStars />
    </div>
  );
}

export const projects = [
  {
    title: "Blok Votes",
    description:
      "A web3 voting platform that allows users to create and participate in decentralized polls using blockchain technology.",
    link: "https://github.com/Phantom18tm/blocvote",
  },
  {
    title: "Krishi_Seva",
    description:
      "An AI and IoT driven platform that calculates soil health and recommends the best crop and fertilizer based on the region's soil and weather.",
    link: "https://github.com/Phantom18tm/Gov-Web",
  },
  {
    title: "Demofolio",
    description:
      "A demo portfolio that uses pre-built React and Next.js components from Acernity UI.",
    link: "https://github.com/Phantom18tm/Portfolio",
  },
  {
    title: "Blog Heaven",
    description:
      "A Web3 blogging platform allowing users to create, share, and monetize content using blockchain.",
    link: "https://github.com/Phantom18tm/BLOG-HEAVEN",
  },
  {
    title: "BUS_BOOK",
    description:
      "A bus ticket booking site that lets users choose seats and pay online seamlessly.",
    link: "https://github.com/Phantom18tm/bus-ticket",
  },
];
