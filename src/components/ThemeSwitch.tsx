"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/context/theme";

const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();

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

  return (
    <AnimatePresence>
      <motion.button
        key={theme}
        onClick={toggleTheme}
        className="fixed bottom-5 right-5 scale-125 rounded-full bg-gray-100 p-1.5 neon-indigo
        hover:scale-[1.4] focus:scale-[1.4] active:scale-[1.3]
        motion-safe:transition-transform
        dark:bg-gray-950 dark:neon-green"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        aria-label="toggle color theme"
      >
        {theme == "light" ? <Sun /> : <Moon />}
      </motion.button>
    </AnimatePresence>
  );
};

export default ThemeSwitch;
