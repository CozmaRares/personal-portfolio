"use client";

import { motion } from "framer-motion";
import { sections } from "@/lib/data";
import Link from "next/link";
import { useActiveSectionContext } from "@/context/active-section";
import { cn } from "@/lib/utils";

const Header = () => {
  const { activeSection, setActiveSection } = useActiveSectionContext();

  return (
    <motion.header
      className="fixed left-1/2 top-0 z-50 w-full min-w-[20rem] bg-white/30 p-4 capitalize backdrop-blur neon-indigo-lg [translate:-50%]
      dark:bg-gray-950/30 dark:neon-green-lg
      sm:top-5 sm:w-[39rem] sm:rounded-full"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      <nav className="flex items-center justify-center">
        <ul className="flex w-[20rem] flex-row flex-wrap items-center justify-center gap-4 sm:w-full sm:justify-evenly">
          {sections.map(section => (
            <li key={section}>
              <Link
                href={`#${section}`}
                className={cn("relative rounded-full p-3", {})}
                onClick={() => setActiveSection(section)}
              >
                {section}
                {section == activeSection && (
                  <motion.span
                    className="absolute inset-0 -z-10 block rounded-full bg-indigo-400/40 dark:bg-green-600/40"
                    layoutId="activeSection"
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
};

export default Header;
