"use client";

import { links } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <>
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
      <main className="mt-32 flex flex-col items-center">
        <Intro />
      </main>
    </>
  );
};

const Intro = () => (
  <section className="flex max-w-[50rem] flex-col items-center gap-8 text-center [text-wrap:balance]">
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
      className="text-2xl font-medium !leading-[1.5] sm:text-4xl"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      Hey there, <span className="font-bold">I&apos;m Rares!</span> I&apos;m{" "}
      <span className="font-bold">a web developer</span> who loves creating{" "}
      <span className="italic">sites & apps</span>. While I mainly work with{" "}
      <span className="underline">React</span>, I also enjoy tinkering with
      various web technologies, and get my hands dirty with stuff like{" "}
      <span className="underline">C/C++</span> and
      <span className="underline">Java</span>. 😊
    </motion.h1>
  </section>
);

export default Home;
