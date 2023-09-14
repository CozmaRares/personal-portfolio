"use client";

import { FaSun, FaMoon } from "react-icons/fa6";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

type Theme = "light" | "dark";

const ThemeSwitch = () => {
  const [theme, setTheme] = useState<Theme>("light");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      window.localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      window.localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme") as Theme | null;

    if (localTheme) {
      setTheme(localTheme);

      if (localTheme === "dark") {
        document.documentElement.classList.add("dark");
      }
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  return (
    <AnimatePresence>
      <motion.button
        key={theme}
        onClick={toggleTheme}
        className="fixed bottom-5 right-5 scale-125 rounded-full bg-gray-100 p-1.5 transition-transform neon-indigo hover:scale-[1.4] focus:scale-[1.4] active:scale-[1.3] dark:bg-gray-950 dark:neon-green"
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
