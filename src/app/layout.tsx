import ThemeContextProvider from "@/context/theme";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ThemeSwitch from "@/components/ThemeSwitch";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rares | Portfolio",
  description: "Generated by create next app",
};

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html
      lang="en"
      className="!scroll-smooth"
    >
      <body
        className={`${inter.className} bg-gray-100 text-gray-950 dark:bg-gray-900 dark:text-gray-50`}
      >
        <ThemeContextProvider>
          {children}
          <ThemeSwitch />
        </ThemeContextProvider>
      </body>
    </html>
  );
};

export default RootLayout;