"use client";

import Line from "./Line";
import { useState } from "react";
import { IoCode, IoCodeSlash } from "react-icons/io5";
import { headingFont } from "@/lib/fonts";
import { projectData } from "@/lib/data";
import Project from "./Project";
import { cn } from "@/lib/utils";

const Projects = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className={`${Line.containerClass} gap-x-0`}>
      {isOpen && (
        <>
          <div className="mx-auto">
            <Line className="h-full bg-gradient-to-t" />
          </div>
          <div className="pt-20" />
          <div className="col-start-1 flex items-center justify-center">
            <Line.breakPoint>
              <IoCode />
            </Line.breakPoint>
          </div>
          <h2
            className={`${headingFont.className} text-heading flex flex-row items-center justify-center gap-8 sm:justify-start`}
          >
            <span className="hidden h-[1px] w-1/4 bg-indigo-500 dark:bg-green-600 sm:block" />
            <span className={`${headingFont.className} text-heading`}>
              Other projects
            </span>
          </h2>
          <div>
            <Line className="mx-auto h-1/2 dark:to-green-800" />
            <Line className="mx-auto h-1/2 bg-gradient-to-t dark:to-green-800" />
          </div>
          <ul className="grid-like-flex py-12 pr-3 [--gap:1rem] sm:[--cols:2] lg:[--cols:3]">
            {projectData.other.map(data => (
              <li key={`project-other-${data.title}`}>
                <Project {...data} />
              </li>
            ))}
          </ul>
          <div className="mx-auto">
            <Line.breakPoint>
              <IoCodeSlash />
            </Line.breakPoint>
          </div>
        </>
      )}
      <button
        onClick={() => setIsOpen(prev => !prev)}
        className={cn(
          `mx-auto h-12 w-36 rounded-xl border-2 border-indigo-600 p-3 text-indigo-600 transition-[background-color]
          hover:bg-indigo-300/20 dark:border-green-400
          dark:text-green-400 dark:hover:bg-green-700/20`,
          { "col-span-full mt-12": !isOpen },
        )}
      >
        Show {isOpen ? "less" : "more"}
      </button>
    </section>
  );
};

export default Projects;
