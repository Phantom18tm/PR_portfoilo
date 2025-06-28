import { IconMail, IconBrandLinkedin } from "@tabler/icons-react";

export function Footer() {
  return (
    <div id="contact" className="w-full bg-black px-4 sm:px-6 md:px-10 py-10 flex flex-col items-center justify-center text-center relative z-10">
     
      <div className="flex items-center justify-center w-full flex-wrap mb-6">
        <hr className="flex-grow border-t border-neutral-500" />
        <p className="mx-4 text-white text-[8px] sm:text-xs md:text-sm font-Michroma whitespace-nowrap">
          Made by Brilliant Mind
        </p>
        <hr className="flex-grow border-t border-neutral-500" />
      </div>

      
      <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-2 text-neutral-600 dark:text-neutral-400 font-Michroma text-xs sm:text-sm md:text-base">
        <span className="text-white">Connect with me on:</span>

      
        <a
          href="mailto:mailprathamrathore28@gmail.com"
          className="flex items-center gap-1 text-white hover:text-neutral-300 transition duration-200"
        >
          <IconMail className="h-5 w-5" />
          <span className="text-[11px] sm:text-xs md:text-sm">mailprathamrathore28@gmail.com</span>
        </a>

       
        <span className="text-white mx-1">|</span>

       
        <a
          href="https://www.linkedin.com/in/prathamr85650/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-white hover:text-neutral-300 transition duration-200"
        >
          <IconBrandLinkedin className="h-5 w-5" />
          <span className="text-[11px] sm:text-xs md:text-sm">pratham85650</span>
        </a>
      </div>
    </div>
  );
}
