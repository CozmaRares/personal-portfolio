"use client";

import { motion, MotionConfig } from "framer-motion";
import Line from "./Line";
import { headingFont } from "@/lib/fonts";
import useSectionInView from "@/hooks/useSectionInView";
import { HelpCircle } from "lucide-react";

const About = () => {
  const { ref } = useSectionInView("about", 0.8);

  return (
    <MotionConfig
      transition={{ delay: 0.3 }}
      reducedMotion="user"
    >
      <section
        ref={ref}
        className={Line.containerClass}
        id="about"
      >
        <motion.div
          className="flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <Line.breakPoint>
            <HelpCircle />
          </Line.breakPoint>
        </motion.div>
        <motion.h2
          className="flex flex-row items-center"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <span className="mx-4 h-[1px] grow bg-indigo-400 dark:bg-green-300 xs:ml-10 sm:hidden" />
          <span className={`${headingFont.className} text-heading`}>
            About me
          </span>
          <span className="mx-4 h-[1px] max-w-xs grow bg-indigo-400 dark:bg-green-300 xs:mr-10" />
        </motion.h2>
        <motion.div
          className="origin-top"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "tween",
            delay: 0.6,
          }}
        >
          <Line className="mx-auto h-full to-indigo-400 dark:to-green-500" />
        </motion.div>
        <motion.div
          className="my-4 space-y-4 text-base sm:my-16 sm:text-lg"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <p>
            I got started on this path back in high school when I got into C++.
            I leveled up my skills by messing around with little command-line
            programs and games.
          </p>
          <p>
            Before starting college, I stumbled upon HTML and CSS, dabbled a bit
            in p5.js, and eventually found my love for React. I&apos;m always up
            for learning and broadening my skill set, especially when it comes
            to checking out other web frameworks.
          </p>
          <p>
            Apart from being pretty solid with C/C++ and getting my feet wet
            with Java during my second year in college, I&apos;m totally up for
            getting the hang of other backend languages.
          </p>
        </motion.div>
        <div className="col-span-full flex flex-row items-end pb-20 pl-[calc((var(--col-1)-3px)/2)]">
          <div className="aspect-square w-6 rounded-bl-3xl border-b-[3px] border-l-[3px] border-b-indigo-400 border-l-indigo-400 dark:border-b-green-500 dark:border-l-green-500" />
          <Line className="h-[3px] w-2/5 bg-gradient-to-r" />
        </div>
      </section>
    </MotionConfig>
  );
};

export default About;
