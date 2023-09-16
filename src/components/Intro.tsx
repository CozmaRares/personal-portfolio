"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import TypeWriter from "./TypeWriter";
import { Libre_Franklin } from "next/font/google";
import Link from "next/link";
import { BsDownload } from "react-icons/bs";
import { FaArrowRightLong, FaGithubAlt } from "react-icons/fa6";
import Line from "./Line";

const libre_franklin = Libre_Franklin({ subsets: ["latin-ext"] });

const Intro = () => (
  <section className={Line.containerClass}>
    <motion.div
      className="flex flex-col items-center sm:gap-2"
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{
        type: "tween",
        duration: 0.15,
      }}
    >
      <Line className="flex-grow" />
      <Image
        src="https://placehold.co/96"
        alt="Rares' portrait"
        width={96}
        height={96}
        quality={80}
        priority
        className="aspect-square w-full rounded-full neon-indigo-lg dark:neon-green-lg"
      />
      <Line className="flex-grow-[2] bg-gradient-to-t" />
    </motion.div>
    <motion.div
      className="pb-12 pt-12 sm:pt-36 md:pb-20"
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{
        duration: 0.15,
      }}
    >
      <h1
        className={`${libre_franklin.className} pb-6 text-center text-xl !leading-[1.5] xs:text-3xl sm:pb-8 sm:text-left sm:text-5xl md:pb-12 md:text-6xl`}
      >
        <p>Hey,</p>
        <p>
          I&apos;m{" "}
          <span className="pr-[var(--shadow-off)] sm:text-indigo-500 sm:[--shadow-col:#71717a] sm:[--shadow-off:5px] sm:[text-shadow:var(--shadow-off)_0px_var(--shadow-col)] sm:dark:text-green-600 sm:dark:[--shadow-col:#94a3b8] md:[--shadow-off:7px]">
            R
          </span>
          areș,
        </p>
        <p>
          a{" "}
          <TypeWriter
            typeWriter={[
              [
                { type: "add", text: "programmer." },
                { type: "pause", duration: 1000 },
                { type: "clear" },
                { type: "pause", duration: 500 },
                { type: "add", text: "vim user" },
                { type: "pause", duration: 100 },
                { type: "clear" },
                { type: "pause", duration: 500 },
                { type: "add", text: "web developer." },
                { type: "pause", duration: 2000 },
                { type: "clear" },
                { type: "pause", duration: 500 },
                { type: "add", text: "full-stack develo" },
                { type: "pause", duration: 550 },
                { type: "delete", numChars: 3 },
                { type: "add", text: "." },
                { type: "pause", duration: 5000 },
              ],
              {
                loop: true,
                delay: 300,
                typingSpeed: 80,
              },
            ]}
          />
        </p>
      </h1>
      <div className="mx-auto grid w-1/3 min-w-fit flex-col items-center gap-4 sm:mx-0 sm:w-fit sm:grid-cols-[repeat(3,auto)] md:text-lg">
        <Link
          href="#contact"
          className="group flex w-full flex-row items-center justify-center gap-2 whitespace-nowrap rounded-full bg-gray-950/80 px-7 py-3 text-white neon-indigo hover:scale-110 focus:scale-110 active:scale-105 motion-safe:transition-transform dark:bg-slate-300/80 dark:text-black dark:neon-green sm:w-fit"
        >
          Contact me{" "}
          <span className="opacity-70 delay-150 group-hover:translate-x-[2px] motion-safe:transition-transform sm:hidden md:inline">
            <FaArrowRightLong />
          </span>
        </Link>
        <a
          href="/CV.pdf"
          download
          className="border-card group flex w-full flex-row items-center justify-center gap-2 whitespace-nowrap rounded-full bg-white/40 px-7 py-3 hover:scale-110 focus:scale-110 active:scale-105 motion-safe:transition-transform dark:bg-gray-900/40 sm:w-fit"
        >
          Download CV{" "}
          <span className="delay-150 group-hover:translate-y-[2px] motion-safe:transition-transform sm:hidden md:inline">
            <BsDownload />
          </span>
        </a>
        <a
          href="https://github.com/CozmaRares/"
          target="_blank"
          aria-label="Github"
          className="border-card group flex h-full w-full flex-row items-center justify-center gap-2 whitespace-nowrap rounded-full bg-white/50 px-7 py-3 hover:scale-110 focus:scale-110 active:scale-105 motion-safe:transition-transform dark:bg-gray-900/50 sm:w-fit"
        >
          <span className="sm:hidden">My Github</span>
          <FaGithubAlt />
        </a>
      </div>
    </motion.div>
  </section>
);

export default Intro;
