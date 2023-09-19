"use client";

import Line from "./Line";
import { useEffect, useRef, useState } from "react";
import { headingFont } from "@/lib/fonts";
import { projectData } from "@/lib/data";
import Project from "./Project";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import useSectionInView from "@/hooks/useSectionInView";
import { Code, Code2 } from "lucide-react";

const TRANSITION_ORDER = Object.freeze({
  first_line: 1,
  open_code: 2,
  header: 2,
  heading: 3,
  second_line: 4,
  list: 4,
  close_code: 5,
} as const);

const transitionDuration = 0.2;

const computeDelay = (order: number, extraDelay?: number) => {
  if (extraDelay == undefined) extraDelay = 0;
  return transitionDuration * (order - 1) + extraDelay;
};

const Projects = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { ref } = useSectionInView("projects", 0.2);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const wasOpened = useRef(false);

  useEffect(() => {
    if (isOpen) wasOpened.current = true;
    else if (wasOpened.current) buttonRef.current!.scrollIntoView();
  }, [isOpen]);

  return (
    <section
      ref={isOpen ? ref : undefined}
      className={`${Line.containerClass} gap-x-0`}
    >
      {isOpen && (
        <>
          <motion.div
            className="mx-auto origin-top"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: transitionDuration,
              delay: computeDelay(TRANSITION_ORDER.first_line),
            }}
          >
            <Line className="h-full bg-gradient-to-t" />
          </motion.div>
          <div className="pt-20" />
          <motion.div
            className="col-start-1 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: transitionDuration,
              delay: computeDelay(TRANSITION_ORDER.open_code),
            }}
          >
            <Line.breakPoint>
              <Code />
            </Line.breakPoint>
          </motion.div>
          <motion.h2
            className={`${headingFont.className} text-heading flex flex-row items-center justify-center gap-8 sm:justify-start`}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: transitionDuration,
              delay: computeDelay(TRANSITION_ORDER.header),
            }}
          >
            <motion.span
              className="hidden h-[1px] bg-indigo-500 dark:bg-green-600 sm:block"
              initial={{ width: 0 }}
              animate={{ width: "25%" }}
              transition={{
                duration: transitionDuration,
                delay: computeDelay(
                  TRANSITION_ORDER.heading,
                  transitionDuration + 0.1,
                ),
              }}
            />
            <span className={`${headingFont.className} text-heading`}>
              Other projects
            </span>
          </motion.h2>
          <motion.div
            className="origin-top"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: transitionDuration,
              delay: computeDelay(TRANSITION_ORDER.second_line),
            }}
          >
            <Line className="mx-auto h-1/2 to-indigo-200 dark:to-green-800" />
            <Line className="mx-auto h-1/2 bg-gradient-to-t to-indigo-200 dark:to-green-800" />
          </motion.div>
          <ul className="grid-like-flex py-12 pr-3 [--gap:1rem] sm:[--cols:2] lg:[--cols:3]">
            {projectData.other.map((data, idx) => (
              <motion.li
                key={`project-other-${data.title}`}
                initial={{ x: -100, opacity: 0 }}
                animate={{
                  x: 0,
                  opacity: 1,
                  transition: {
                    delay: computeDelay(TRANSITION_ORDER.list, idx * 0.1),
                  },
                }}
              >
                <Project {...data} />
              </motion.li>
            ))}
          </ul>
          <motion.div
            className="mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: transitionDuration,
              delay: computeDelay(TRANSITION_ORDER.close_code),
            }}
          >
            <Line.breakPoint>
              <Code2 />
            </Line.breakPoint>
          </motion.div>
        </>
      )}
      <button
        ref={buttonRef}
        onClick={() => {
          buttonRef.current!.blur();
          setIsOpen(!isOpen);
        }}
        className={cn(
          `col-span-full mx-auto h-12 w-36 scroll-mt-32 rounded-xl border-2 border-indigo-600 p-3
          text-indigo-600 outline-none transition-colors
          hover:bg-indigo-600 hover:text-white
          focus:bg-indigo-600 focus:text-white
          dark:border-green-400 dark:text-green-400
          dark:hover:bg-green-400 dark:hover:text-gray-950
          dark:focus:bg-green-400 dark:focus:text-gray-950`,
          { "mt-12": !isOpen },
        )}
      >
        Show {isOpen ? "less" : "more"}
      </button>
    </section>
  );
};

export default Projects;
