"use client";

import { useState, createContext, useContext, useEffect } from "react";

type Theme = "light" | "dark";

export const ThemeContext = createContext<{
  theme: Theme;
  setTheme: (theme: Theme) => void;
} | null>(null);

type Props = { children: React.ReactNode };

const ThemeContextProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme") as Theme | null;

    if (localTheme) {
      setTheme(localTheme);
      if (localTheme === "dark") document.documentElement.classList.add("dark");
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;

export function useTheme() {
  const context = useContext(ThemeContext);

  if (context == null) {
    throw new Error("useTheme must be used within an ThemeContextProvider");
  }

  return context;
}
