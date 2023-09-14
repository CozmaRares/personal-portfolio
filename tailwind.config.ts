import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";
import { CSSRuleObject } from "tailwindcss/types/config";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "0" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        blink: "blink 1s infinite",
      },
      screens: {
        xs: "400px",
      },
      width: {
        line: "3px",
      },
    },
  },
  plugins: [
    plugin(({ theme, addUtilities }) => {
      const neon: CSSRuleObject = {};
      const sizes: {
        name?: string;
        dimensions: { inner: number; outer: number };
      }[] = [
        { name: "sm", dimensions: { inner: 2, outer: 10 } },
        { dimensions: { inner: 5, outer: 20 } },
        { name: "lg", dimensions: { inner: 8, outer: 30 } },
      ];
      const colors = theme("colors");

      for (const color in colors) {
        if (typeof colors[color] === "object") {
          const color1 = colors[color]["500"];
          const color2 = colors[color]["700"];

          for (const size of sizes)
            neon[`.neon-${color}${size.name ? "-" + size.name : ""}`] = {
              boxShadow: `0 0 ${size.dimensions.inner}px ${color1}, 0 0 ${size.dimensions.outer}px ${color2}`,
            };
        }
      }

      addUtilities(neon);
    }),
  ],
};
export default config;
