import "./globals.css";
import type { Metadata } from "next";
import ThemeSwitch from "@/components/ThemeSwitch";
import Header from "@/components/Header";
import MotionConfigWrapper from "@/components/MotionConfigWrapper";
import ActiveSectionContextProvider from "@/context/active-section";
import { defaultFont } from "@/lib/fonts";
import { Toaster } from "@/components/shadcn/ui/toaster";
import Footer from "@/components/Footer";

const author = "Rares Cozma";
const name = "Personal Portfolio";
const title = `${author} | ${name}`;
const description =
  "Discover the skills of Rares Cozma in this personal portfolio. With proficiency in JavaScript, React, and also back-end languages such as C/C++, and Java, along with a solid grasp of Git for version control.";
const url = "https://raru.dev";

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title,
  description,
  applicationName: name,
  authors: { name: author },
  generator: "Next.js",
  keywords: [
    "Rares Cozma",
    "Cozma Rares",
    "portfolio",
    "web development",
    "full-stack",
    "react",
    "nextjs",
  ],
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#111827" },
    { media: "(prefers-color-scheme: light)", color: "#f3f4f6" },
  ],
  colorScheme: "light dark",
  viewport: "width=device-width, initial-scale=1",
  creator: author,
  publisher: "Vercel",
  alternates: { canonical: url },
  robots: "index, follow",
  openGraph: {
    type: "website",
    url,
    title,
    description,
    siteName: name,
  },
  appleWebApp: true,
  category: "web development",
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
        <Footer />
        <ThemeSwitch />
        <Toaster className="!top-0" />
      </MotionConfigWrapper>
    </body>
  </html>
);

export default RootLayout;
