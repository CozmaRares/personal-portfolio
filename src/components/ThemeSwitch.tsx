"use client";

import { useTheme } from "@/context/theme";
import { FaSun, FaMoon } from "react-icons/fa6";
import { AnimatePresence, motion } from "framer-motion";

const ThemeSwitch = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <AnimatePresence>
      <motion.button
        key={theme}
        onClick={toggleTheme}
        className="fixed bottom-5 right-5 scale-125 rounded-full bg-gray-200 p-1.5 neon-amber dark:bg-gray-950 dark:neon-sky"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        aria-label="toggle color theme"
      >
        {theme == "light" ? <FaSun /> : <FaMoon />}
      </motion.button>
    </AnimatePresence>
  );
};

export default ThemeSwitch;
