"use client";

import { links } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import "./line.css";

const Home = () => {
  return (
    <>
      <div className="2 absolute -top-1 right-0 -z-10 h-[30rem] w-[30rem] rounded-full bg-fuchsia-200 blur-[100px] dark:bg-cyan-300/30 sm:right-[5rem] sm:w-[65rem]" />
      <div className="absolute -left-[35rem] -top-4 -z-10 h-[30rem] w-[50rem] rounded-full bg-pink-200/80 blur-[100px] dark:bg-indigo-400/40 sm:w-[65rem] lg:-left-[30rem]" />
      <motion.header
        className="fixed left-1/2 top-0 w-full min-w-[15rem] bg-white/50 p-4 capitalize backdrop-blur neon-amber-sm dark:bg-gray-950/70 dark:neon-sky-sm  sm:top-5 sm:w-[30rem] sm:rounded-full"
        initial={{ x: "-50%", y: -100, opacity: 0 }}
        animate={{ x: "-50%", y: 0, opacity: 1 }}
      >
        <nav>
          <ul className="flex w-full flex-row flex-wrap items-center justify-evenly gap-4">
            {links.map(link => (
              <li key={link}>
                <Link href={`#${link}`}>{link}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </motion.header>
      <main className="flex flex-col items-center">
        <Intro />
      </main>
    </>
  );
};

const Intro = () => (
  <section className="line-detail flex flex-col items-center gap-8 pb-12 pt-32 text-center [text-wrap:balance]">
    <motion.div
      className="line origin-top"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        type: "tween",
        duration: 0.2,
      }}
    />
    <motion.div
      className="absolute left-[var(--offset-left)] top-[240px] -z-[1] hidden h-[50px] w-[calc(50%-var(--offset-left))] rounded-b-[80px] [border-color:rgb(var(--line-color))] [border-top:none] [border-width:var(--line-width)] lg:block"
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
    />
    <div className="relative">
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          type: "tween",
          duration: 0.2,
        }}
      >
        <Image
          src="https://placehold.co/96"
          alt="Rares' portrait"
          width={96}
          height={96}
          quality={80}
          priority
          className="rounded-full border-4 border-white neon-amber-lg dark:border-black dark:neon-sky-lg"
        />
      </motion.div>
      <motion.span
        className="absolute bottom-0 right-0 text-3xl"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 150,
          delay: 0.1,
          duration: 0.5,
        }}
      >
        👋
      </motion.span>
    </div>
    <motion.h1
      className="text-2xl font-medium !leading-[1.5] md:text-3xl lg:mt-[50px]"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      Hey there, <span className="font-bold">I&apos;m Rares!</span> I&apos;m{" "}
      <span className="font-bold">a web developer</span> who loves creating{" "}
      <span className="italic">sites & apps</span>. While I mainly work with{" "}
      <span className="underline">React</span>, I also enjoy tinkering with
      various <span className="underline">web technologies</span>, and get my
      hands dirty with stuff like <span className="underline">C/C++</span> and{" "}
      <span className="underline">Java</span>. 😊
    </motion.h1>
  </section>
);

export default Home;
