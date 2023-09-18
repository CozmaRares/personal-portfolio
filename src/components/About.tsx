"use client";

import { FaQuestion } from "react-icons/fa";
import { motion, MotionConfig } from "framer-motion";
import Line from "./Line";
import { headingFont } from "@/lib/fonts";
import useSectionInView from "@/hooks/useSectionInView";

const About = () => {
  const { ref } = useSectionInView("about", 0.95);

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
            <FaQuestion />
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
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "tween",
            delay: 0.6,
          }}
        >
          <Line className="mx-auto h-full origin-top" />
        </motion.div>
        <motion.div
          className="space-bottom space-y-4 pt-4 text-base !leading-[1.5] sm:pb-56 sm:text-lg"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <p>
            My journey began back in high school, where I developed a
            fascination for C++ and honed my skills by creating small CLI
            programs and games.
          </p>
          <p>
            As I transitioned to college, I discovered HTML and CSS, briefly
            experimented with p5.js, and, ultimately, settled on React. I&apos;m
            always eager to learn and expand my horizons, with a keen interest
            in exploring additional web frameworks.
          </p>
          <p>
            In addition to my proficiency in C/C++ and my introduction to Java
            in my second year of college, I&apos;m open to mastering other
            backend languages.
          </p>
        </motion.div>
      </section>
    </MotionConfig>
  );
};

export default About;
