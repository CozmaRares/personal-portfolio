import beerBoutiqueImg from "@/../public/projects/beer-boutique.png";
import kryptoImg from "@/../public/projects/krypto-nft.png";
import chessImg from "@/../public/projects/chess.png";
import serverImg from "@/../public/projects/c-server.png";
import type { StaticImageData } from "next/image";
import type { Prettify } from "./types";
import { Layout, LucideIcon, Server } from "lucide-react";

export const sections = Object.freeze([
  "home",
  "about",
  "projects",
  "skills",
  "contact",
] as const);

export type SectionName = (typeof sections)[number];

export type ProjectType = {
  title: string;
  description: string;
  tags: Array<string | { text: string; link: string }>;
  githubLink: string;
  icon: LucideIcon;
};

export type FeaturedProjectType = Prettify<
  Omit<ProjectType, "icon"> & { demoLink?: string; image: StaticImageData }
>;

export const projectData = Object.freeze({
  featured: [
    {
      title: "Beer Boutique",
      description:
        "Stylish and interactive mock beer pub website with a responsive user interface.",
      tags: [
        "React",
        "TypeScript",
        "React Router",
        "TailwindCSS",
        "GitHub Pages",
      ],
      githubLink: "https://github.com/CozmaRares/beer-pub",
      demoLink: "https://beerpub.raru.dev/",
      image: beerBoutiqueImg,
    },
    {
      title: "Krypto | NFT",
      description: "Responsive landing page for a fictitious NFT market.",
      tags: ["React", "TypeScript", "TailwindCSS", "GitHub Pages", "Figma"],
      githubLink: "https://github.com/CozmaRares/nft-landing",
      demoLink: "https://nft-landing.raru.dev/",
      image: kryptoImg,
    },
    {
      title: "Chess Online",
      description:
        "A chess game website featuring both multiplayer and local gameplay modes, with a custom-built chess engine. Emphasis was placed on server functionality rather than UI.",
      tags: [
        "Socket.IO",
        "React",
        "TypeScript",
        "TailwindCSS",
        "Express.js",
        "AWS",
      ],
      githubLink: "https://github.com/CozmaRares/chess",
      demoLink: "https://chess.raru.dev/",
      image: chessImg,
    },
    {
      title: "HTTP Server",
      description:
        "An HTTP server with file-based routing for serving static content and custom routes for dynamic functionality.",
      tags: ["C", "Makefile", "Data Structures"],
      githubLink: "https://github.com/CozmaRares/c-server",
      image: serverImg,
    },
  ],
  other: [
    {
      title: "Pseudocode Interpreter",
      description:
        "An interpreter for a dynamic programming language based on pseudocode, featuring customizable error messages, function names, keywords, and primitive types.",
      tags: ["C++"],
      githubLink: "https://github.com/CozmaRares/psc-interpreter",
      icon: Server,
    },
    {
      title: "Sorting Algorithms Visualizer",
      description:
        "A sorting algorithms visualizer using p5.js for drawing, showcasing a range of algorithms from bubble sort to intro sort, bundled with Webpack.",
      tags: [
        "JavaScript",
        "Webpack",
        { text: "p5.js", link: "https://p5js.org/" },
      ],
      githubLink: "https://github.com/CozmaRares/sorting-algs-visualizer",
      icon: Layout,
    },
    {
      title: "Polynomial Calculator",
      description:
        "Polynomial calculator with a dedicated graphical interface through which the user can insert polynomials, select the mathematical operation to be performed and view the result.",
      tags: ["Java", "JUnit", "Maven"],
      githubLink: "https://github.com/CozmaRares/polynomial-calculator",
      icon: Server,
    },
    {
      title: "Queue Management",
      description:
        "An application that simulates queuing-based systems. It involves clients arriving, joining queues, waiting, getting served, and leaving. The application calculates key metrics such as average waiting time, average service time, and peak hour.",
      tags: ["Java", "Maven"],
      githubLink: "https://github.com/CozmaRares/queue-management",
      icon: Server,
    },
    {
      title: "Orders Management",
      description:
        "An application for client order management in a warehouse, utilizing SurrealDB as the database, offering basic CRUD functionality.",
      tags: [
        "Java",
        "Maven",
        { text: "SurrealDB", link: "https://surrealdb.com/" },
      ],
      githubLink: "https://github.com/CozmaRares/orders-management",
      icon: Server,
    },
  ],
} satisfies {
  featured: FeaturedProjectType[];
  other: ProjectType[];
});

export const skills = Object.freeze([
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "Framer Motion",
  "Vite",
  "Vitest",
  "Socket.IO",
  "TailwindCSS",
  "Git",
  "Markdown",
  "C/C++",
  "Makefile",
  "Java",
  "JUnit",
  "SurrealDB",
  "Basic AWS",
] as const);
