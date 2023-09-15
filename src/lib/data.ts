import beerBoutiqueImg from "@/../public/projects/beer-boutique.png";
import kryptoImg from "@/../public/projects/krypto-nft.png";
import chessImg from "@/../public/projects/chess.png";
import serverImg from "@/../public/projects/c-server.png";
import { StaticImageData } from "next/image";

export const sections = Object.freeze([
  "home",
  "about",
  "projects",
  "skills",
  "contact",
] as const);

export const projectData: Readonly<{
  showcase: {
    title: string;
    description: string;
    tags: string[];
    githubLink: string;
    demoLink?: string;
    image: StaticImageData;
  }[];
}> = Object.freeze({
  showcase: [
    {
      title: "Beer Boutique",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus quaerat ducimus dolorum dolorem laudantium porro dolor debitis inventore architecto! Exercitationem.",
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
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus quaerat ducimus dolorum dolorem laudantium porro dolor debitis inventore architecto! Exercitationem.",
      tags: ["React", "TypeScript", "TailwindCSS", "GitHub Pages", "Figma"],
      githubLink: "https://github.com/CozmaRares/nft-landing",
      demoLink: "https://nft-landing.raru.dev/",
      image: kryptoImg,
    },
    {
      title: "Chess Online",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus quaerat ducimus dolorum dolorem laudantium porro dolor debitis inventore architecto! Exercitationem.",
      tags: [
        "SocketIO",
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
      title: "C HTTP Server",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus quaerat ducimus dolorum dolorem laudantium porro dolor debitis inventore architecto! Exercitationem.",
      tags: ["C", "Makefile", "Data Structures"],
      githubLink: "https://github.com/CozmaRares/c-server",
      image: serverImg,
    },
  ],
});
