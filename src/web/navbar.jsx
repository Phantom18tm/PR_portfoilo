"use client";
import React from "react";
import { FloatingNav } from "../components/nav.tsx";
import { IconHome, IconPhonePlus, IconUser,IconBrandGithub,IconFileCv } from "@tabler/icons-react";
export function FloatingNavDemo() {
  const navItems = [
    {
      name: "Home",
      link: "#home",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "#intro",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
{
      name: "Projects",
      link: "#project",
      icon: <IconBrandGithub className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
{
      name: "Resume",
      link: "#resume",
      icon: <IconFileCv className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: "#contact",
      icon: <IconPhonePlus className="h-4 w-4 text-neutral-500 dark:text-white" />,
    }
  ];
  return (
    
    <div className="relative z-50 w-full font-Michroma">
      <FloatingNav navItems={navItems} />
    </div>
   
  );
}
