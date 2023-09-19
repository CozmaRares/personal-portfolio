import "./globals.css";
import type { Metadata } from "next";
import ThemeSwitch from "@/components/ThemeSwitch";
import Header from "@/components/Header";
import MotionConfigWrapper from "@/components/MotionConfigWrapper";
import ActiveSectionContextProvider from "@/context/active-section";
import { defaultFont } from "@/lib/fonts";
import { Toaster } from "@/components/shadcn/ui/toaster";

export const metadata: Metadata = {
  title: "Rares | Portfolio",
  description: "Generated by create next app",
};

type Props = { children: React.ReactNode };

const RootLayout = ({ children }: Props) => (
  <html
    lang="en"
    className="!scroll-smooth"
  >
    <body
      className={`${defaultFont.className} bg-gray-100 text-gray-950 dark:bg-gray-900 dark:text-gray-50`}
    >
      <MotionConfigWrapper reducedMotion="user">
        <ActiveSectionContextProvider>
          <Header />
          {children}
        </ActiveSectionContextProvider>
        <ThemeSwitch />
        <Toaster className="!top-0" />
      </MotionConfigWrapper>
    </body>
  </html>
);

export default RootLayout;
