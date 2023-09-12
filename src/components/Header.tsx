"use client";

import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";

const Header = () => (
  <motion.header
    className="fixed left-1/2 top-0 w-full min-w-[20rem] bg-white/20 p-4 capitalize backdrop-blur neon-indigo-lg dark:bg-gray-950/20 dark:neon-green-lg  sm:top-5 sm:w-[33rem] sm:rounded-full"
    initial={{ x: "-50%", y: -100, opacity: 0 }}
    animate={{ x: "-50%", y: 0, opacity: 1 }}
  >
    <nav className="flex items-center justify-center">
      <ul className="flex w-[20rem] flex-row flex-wrap items-center justify-center gap-4 sm:w-full sm:justify-evenly">
        {links.map(link => (
          <li key={link}>
            <Link href={`#${link}`}>{link}</Link>
          </li>
        ))}
      </ul>
    </nav>
  </motion.header>
);

export default Header;
