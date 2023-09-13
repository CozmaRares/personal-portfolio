"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import TypeWriter from "./TypeWriter";
import { Libre_Franklin } from "next/font/google";
import Link from "next/link";
import { BsDownload } from "react-icons/bs";
import { FaArrowRightLong, FaGithubAlt } from "react-icons/fa6";

const libre_franklin = Libre_Franklin({ subsets: ["latin-ext"] });

const Intro = () => {
  return (
    <section className="grid grid-cols-[auto,1fr] content-center sm:gap-16 md:gap-20">
      <motion.div
        className="flex flex-col items-center pl-3 sm:gap-2"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          type: "tween",
          duration: 0.25,
        }}
      >
        <div className="w-[3px] flex-grow bg-gradient-to-b from-indigo-400 dark:from-green-500" />
        <Image
          src="https://placehold.co/96"
          alt="Rares' portrait"
          width={96}
          height={96}
          quality={80}
          priority
          className="h-16 w-16 rounded-full border-4 border-black neon-indigo-lg dark:neon-green-lg xs:h-20 xs:w-20 sm:h-24 sm:w-24"
        />
        <div className="w-[3px] flex-grow-[2] bg-gradient-to-t from-indigo-400 dark:from-green-500 sm:flex-grow-[1.5]" />
      </motion.div>
      <motion.div
        className="pt-12 sm:pt-36"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          duration: 0.25,
        }}
      >
        <h1
          className={`${libre_franklin.className} pb-6 text-center text-xl !leading-[1.5] xs:text-3xl sm:pb-8 sm:text-left sm:text-5xl md:pb-12 md:text-6xl`}
        >
          <p>Hey,</p>
          <p>
            I&apos;m{" "}
            <span className="pr-[var(--shadow-off)] sm:text-indigo-500 sm:[--shadow-col:#71717a] sm:[--shadow-off:5px] sm:[text-shadow:var(--shadow-off)_0px_var(--shadow-col)] sm:dark:text-green-500 sm:dark:[--shadow-col:#94a3b8] md:[--shadow-off:7px]">
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
                  { type: "add", text: "web developer." },
                  { type: "pause", duration: 2000 },
                  { type: "clear" },
                  { type: "pause", duration: 500 },
                  { type: "add", text: "full-stack devel" },
                  { type: "pause", duration: 550 },
                  { type: "delete", numChars: 2 },
                  { type: "add", text: "." },
                  { type: "pause", duration: 5000 },
                ],
                {
                  loop: true,
                  delay: 240,
                  typingSpeed: 80,
                },
              ]}
            />
          </p>
        </h1>
        <div className="mx-auto grid w-1/3 min-w-fit flex-col items-center gap-4 sm:mx-0 sm:w-fit sm:grid-cols-[repeat(3,auto)] md:text-lg">
          <Link
            href="#contact"
            className="group flex w-full flex-row items-center justify-center gap-2 whitespace-nowrap rounded-full bg-black px-7 py-3 text-white transition neon-indigo hover:scale-110 focus:scale-110 active:scale-105 dark:bg-slate-300 dark:text-black dark:neon-green sm:w-fit"
          >
            Contact me{" "}
            <span className="transition-transform group-hover:translate-x-[2px] sm:hidden md:inline">
              <FaArrowRightLong />
            </span>
          </Link>
          <a
            href="/CV.pdf"
            download
            className="group flex w-full flex-row items-center justify-center gap-2 whitespace-nowrap rounded-full border border-black/30 bg-white px-7 py-3 transition hover:scale-110 focus:scale-110 active:scale-105 dark:border-white/30 dark:bg-gray-900/40 sm:w-fit"
          >
            Download CV{" "}
            <span className="transition-transform group-hover:translate-y-[2px] sm:hidden md:inline">
              <BsDownload />
            </span>
          </a>
          <a
            href="https://github.com/CozmaRares/"
            target="_blank"
            aria-label="Github"
            className="group flex h-full w-full flex-row items-center justify-center gap-2 whitespace-nowrap rounded-full border border-black/30 bg-white px-7 py-3 transition hover:scale-110 focus:scale-110 active:scale-105 dark:border-white/30 dark:bg-gray-900/40 sm:w-fit"
          >
            <span className="sm:hidden">My Github</span>
            <FaGithubAlt />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Intro;
