"use client";

import { FiCode } from "react-icons/fi";
import { motion, MotionConfig } from "framer-motion";

const About = () => (
  <MotionConfig
    transition={{ delay: 0.3 }}
    reducedMotion="user"
  >
    <section className="line-container gap-y-2 py-2 text-xl xs:text-2xl">
      <motion.div
        className="flex-center flex scale-125 items-center justify-center text-indigo-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="inline-grid">
          <span className="col-span-full row-span-full p-1">
            <FiCode />
          </span>
          <span className="-z-10 col-span-full row-span-full aspect-square rounded-full bg-purple-300 blur-sm" />
        </div>
      </motion.div>
      <motion.h2
        className="flex flex-row items-center"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <span className="ml-8 mr-4 h-[1px] grow bg-indigo-400 sm:hidden" />
        About me
        <span className="ml-4 mr-8 h-[1px] max-w-xs grow bg-indigo-400" />
      </motion.h2>
      <motion.div
        className="mx-auto w-[3px] origin-top bg-gradient-to-b from-indigo-500"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          type: "tween",
          delay: 0.6,
        }}
      />
      <motion.div
        className="space-y-4 pt-4 text-base !leading-[1.5] sm:text-lg"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <p>
          My journey began back in high school, where I developed a fascination
          for C++ and honed my skills by creating small CLI programs and games.
        </p>
        <p>
          As I transitioned to college, I discovered HTML and CSS, briefly
          experimented with p5.js, and, ultimately, settled on React. I&apos;m
          always eager to learn and expand my horizons, with a keen interest in
          exploring additional web frameworks.
        </p>
        <p>
          Alongside my knowledge of C/C++ and Java, I&apos;m open to mastering
          other backend languages. ✨
        </p>
      </motion.div>
    </section>
  </MotionConfig>
);

export default About;
