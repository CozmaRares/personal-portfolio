import "./globals.css";
import ThemeSwitch from "@/components/ThemeSwitch";
import Header from "@/components/Header";
import MotionConfigWrapper from "@/components/MotionConfigWrapper";
import ActiveSectionContextProvider from "@/context/active-section";
import { defaultFont } from "@/lib/fonts";
import { Toaster } from "@/components/shadcn/ui/toaster";
import Footer from "@/components/Footer";
import { createMetadata } from "@/lib/utils";

export const metadata = createMetadata({
  title: "Rares Cozma | Personal Portfolio",
  description:
    "Discover the skills of Rares Cozma in this personal portfolio. With proficiency in JavaScript, React, and also back-end languages such as C/C++, and Java, along with a solid grasp of Git for version control.",
  url: new URL("https://raru.dev"),
  author: "Rares Cozma",
  // TODO: add image
  image: "",
  themes: [
    { theme: "light", color: "#f3f4f6" },
    { theme: "dark", color: "#111827" },
  ],
  keywords: [
    "Rares Cozma",
    "Cozma Rares",
    "portfolio",
    "web development",
    "full-stack",
    "react",
    "nextjs",
  ],
});

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
        <Footer />
        <ThemeSwitch />
        <Toaster className="!top-0" />
      </MotionConfigWrapper>
    </body>
  </html>
);

export default RootLayout;
