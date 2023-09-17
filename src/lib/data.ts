import beerBoutiqueImg from "@/../public/projects/beer-boutique.png";
import kryptoImg from "@/../public/projects/krypto-nft.png";
import chessImg from "@/../public/projects/chess.png";
import serverImg from "@/../public/projects/c-server.png";
import type { StaticImageData } from "next/image";
import type { Prettify } from "./types";
import { FaServer } from "react-icons/fa6";
import { MdOutlineWebAsset } from "react-icons/md";
import type { IconType } from "react-icons";

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
  icon: IconType;
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
      title: "Tic Tac Toe game",
      description:
        "Tic Tac Toe game, a project within 'The Odin Project' curriculum, featuring an AI game mode with adjustable difficulty levels.",
      tags: [
        "JavaScript",
        "CSS",
        { text: "TOP", link: "https://www.theodinproject.com/" },
      ],
      githubLink: "https://github.com/CozmaRares/odin-project-tic-tac-toe",
      icon: MdOutlineWebAsset,
    },
    {
      title: "Polynomial Calculator",
      description:
        "Polynomial calculator with a dedicated graphical interface through which the user can insert polynomials, select the mathematical operation to be performed and view the result.",
      tags: ["Java", "JUnit", "Maven"],
      githubLink: "https://github.com/CozmaRares",
      icon: FaServer,
    },
    {
      title: "Queue Management",
      description:
        "An application that simulates queuing-based systems. It involves clients arriving, joining queues, waiting, getting served, and leaving. The application calculates key metrics such as average waiting time, average service time, and peak hour.",
      tags: ["Java", "Maven"],
      githubLink: "https://github.com/CozmaRares",
      icon: FaServer,
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
      githubLink: "https://github.com/CozmaRares",
      icon: FaServer,
    },
    {
      title: "File System Traversal",
      description:
        "A simple CLI program, developed for a college assignment, that employs Linux system calls to parse a custom binary file format and filter directory contents.",
      tags: ["C", "Linux", "Makefile"],
      githubLink: "https://github.com/CozmaRares",
      icon: FaServer,
    },
    {
      title: "Process & Thread Management",
      description:
        "A college homework project focusing on process and thread management, replicating a specified process hierarchy, and implementing thread synchronization.",
      tags: ["C", "Linux", "Makefile"],
      githubLink: "https://github.com/CozmaRares",
      icon: FaServer,
    },
    {
      title: "Inter-process Communication",
      description:
        "A college homework project involving inter-process communication, where the program receives instructions from a tester script, executes them, and exchanges data via pipes.",
      tags: ["C", "Linux", "Makefile"],
      githubLink: "https://github.com/CozmaRares",
      icon: FaServer,
    },
    {
      title: "Pseudocode Interpreter",
      description:
        "An interpreter for a dynamic programming language based on pseudocode, featuring customizable error messages, function names, variables, keywords, and primitive types.",
      tags: ["C++", "Makefile"],
      githubLink: "https://github.com/CozmaRares/psc-interpreter",
      icon: FaServer,
    },
  ],
} satisfies Readonly<{
  featured: FeaturedProjectType[];
  other: ProjectType[];
}>);
