import React from "react";
import { BackgroundLinesDemo } from "./web/home.jsx";  
import {FloatingNavDemo} from "./web/navbar.jsx";
import { Shooting } from "./web/intro.jsx";
import {TechStack} from "./web/techstack.jsx";
import { Project } from "./web/project.jsx";
import { Cardhov } from "./web/project.jsx";
import { Resume }  from "./web/resume.jsx"
import { Footer } from "./web/Footer.jsx"

export default function App() {
  return ( 
    <>
      <FloatingNavDemo/>,
      <BackgroundLinesDemo/>,
      <Shooting />,
      <TechStack/>,
      <Project />,
      <Cardhov />,
      <Resume />,
      <Footer/>

    </>
  );
}
