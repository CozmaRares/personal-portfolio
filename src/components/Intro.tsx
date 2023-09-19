"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import TypeWriter from "./TypeWriter";
import Link from "next/link";
import Line from "./Line";
import { headingFont } from "@/lib/fonts";
import useSectionInView from "@/hooks/useSectionInView";
import { useActiveSectionContext } from "@/context/active-section";
import { ArrowRight, Download } from "lucide-react";
import GithubAlt from "./GithubAlt";

const Intro = () => {
  const { ref, inView } = useSectionInView("home", 0.7);
  const { setActiveSection } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      className={`${Line.containerClass} scroll-mt-96`}
      id="home"
    >
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
        className="space-bottom pt-12 sm:pt-40"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          duration: 0.15,
        }}
      >
        <h1
          className={`
          ${headingFont.className} pb-6 text-center text-xl font-medium !leading-[1.5]
          xs:text-3xl
          sm:pb-8 sm:text-left sm:text-5xl
          md:pb-12 md:text-6xl`}
        >
          <p>Hey,</p>
          <p>
            I&apos;m{" "}
            <span
              className="pr-[var(--shadow-off)] font-normal
              sm:[--shadow-col:#6366f1] sm:[--shadow-off:5px]
              sm:[text-shadow:var(--shadow-off)_0px_var(--shadow-col)]
              sm:dark:[--shadow-col:#16a34a]
              md:[--shadow-off:7px]"
            >
              R
            </span>
            areș,
          </p>
          <p>
            a{" "}
            <TypeWriter
              actions={[
                { type: "add", text: "programmer." },
                { type: "pause", duration: 1000 },
                { type: "delete", numChars: 11 },
                { type: "pause", duration: 500 },
                { type: "add", text: "vim user" },
                { type: "pause", duration: 150 },
                { type: "delete", numChars: 8 },
                { type: "pause", duration: 500 },
                { type: "add", text: "web developer." },
                { type: "pause", duration: 2000 },
                { type: "delete", numChars: 14 },
                { type: "pause", duration: 500 },
                { type: "add", text: "full-stack develo" },
                { type: "pause", duration: 550 },
                { type: "delete", numChars: 3 },
                { type: "add", text: "." },
                { type: "pause", duration: 5000 },
                { type: "delete", numChars: 15 },
              ]}
              settings={{
                loop: true,
                delay: 500,
                typingSpeed: 80,
              }}
              initialText="full-stack dev."
              disabled={!inView}
            />
          </p>
        </h1>
        <div
          className="mx-auto grid w-1/3 min-w-fit flex-col items-center gap-4
          sm:mx-0 sm:w-fit sm:grid-cols-[repeat(3,auto)]
          md:text-lg"
        >
          <Link
            href="#contact"
            className="group flex w-full flex-row items-center justify-center gap-2 whitespace-nowrap rounded-full
            bg-gray-950/80 px-7 py-3 text-white outline-none neon-indigo
            hover:scale-110 focus:scale-110 active:scale-105
            motion-safe:transition-transform
            dark:bg-slate-300/80 dark:text-black dark:neon-green sm:w-fit"
            onClick={() => setActiveSection("contact")}
          >
            Contact me{" "}
            <span className="opacity-70 delay-150 group-hover:translate-x-[2px] motion-safe:transition-transform sm:hidden md:inline">
              <ArrowRight />
            </span>
          </Link>
          <a
            href="/CV.pdf"
            download
            className="border-card group flex w-full flex-row items-center justify-center gap-2 whitespace-nowrap rounded-full
            bg-white/40 px-7 py-3 outline-none
            hover:scale-110 focus:scale-110 active:scale-105
            motion-safe:transition-transform
            dark:bg-gray-900/40
            sm:w-fit"
          >
            Download CV{" "}
            <span className="opacity-70 delay-150 group-hover:translate-y-[2px] motion-safe:transition-transform sm:hidden md:inline">
              <Download />
            </span>
          </a>
          <a
            href="https://github.com/CozmaRares/"
            target="_blank"
            aria-label="Github"
            className="border-card group flex h-full w-full flex-row items-center justify-center gap-2 whitespace-nowrap
            rounded-full bg-white/50 px-7 py-3 outline-none
            hover:scale-110 focus:scale-110 active:scale-105
            motion-safe:transition-transform
            dark:bg-gray-900/50 sm:w-fit"
          >
            <span className="sm:hidden">My Github</span>
            <span className="opacity-70 sm:opacity-100">
              <GithubAlt />
            </span>
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Intro;
