"use client";

import Line from "./Line";
import { useState } from "react";
import { IoCode, IoCodeSlash } from "react-icons/io5";
import { headingFont } from "@/lib/fonts";
import { projectData } from "@/lib/data";
import Project from "./Project";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import useSectionInView from "@/hooks/useSectionInView";

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

const staggerVariant = {
  initial: { x: -100, opacity: 0 },
  animate: (idx: number) => ({
    x: 0,
    opacity: 1,
    transition: { delay: computeDelay(TRANSITION_ORDER.list, idx * 0.1) },
  }),
};

const Projects = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { ref } = useSectionInView("projects", 0.3);

  return (
    <section
      ref={ref}
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
              <IoCode />
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
            <Line className="mx-auto h-1/2 dark:to-green-800" />
            <Line className="mx-auto h-1/2 bg-gradient-to-t dark:to-green-800" />
          </motion.div>
          <ul className="grid-like-flex py-12 pr-3 [--gap:1rem] sm:[--cols:2] lg:[--cols:3]">
            {projectData.other.map((data, idx) => (
              <motion.li
                key={`project-other-${data.title}`}
                variants={staggerVariant}
                initial="initial"
                animate="animate"
                custom={idx}
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
              <IoCodeSlash />
            </Line.breakPoint>
          </motion.div>
        </>
      )}
      <button
        onClick={() => setIsOpen(prev => !prev)}
        className={cn(
          `col-span-full mx-auto h-12 w-36 rounded-xl border-2 border-indigo-600 p-3 text-indigo-600 transition-[background-color]
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
