"use client";

import { projectData } from "@/lib/data";
import Image from "next/image";
import { PiGithubLogoBold } from "react-icons/pi";
import { HiExternalLink } from "react-icons/hi";
import { cn } from "@/lib/utils";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

type Props = (typeof projectData.showcase)[number];

const Project = ({
  title,
  description,
  tags,
  githubLink,
  demoLink,
  image,
}: Props) => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "0.7 1"],
  });
  const transform = useMotionTemplate`translateX(calc(var(--direction, 1) * calc(500px * calc(1 - ${scrollYProgress}))))`;
  const opacity = useTransform(() => 0.5 + scrollYProgress.get() ** 4 / 2);

  return (
    <motion.article
      ref={ref}
      style={{ transform, opacity }}
      className="border-card mx-auto flex h-full max-w-[650px] flex-col items-center gap-6 rounded-xl bg-indigo-100 p-8 text-right group-even:[--direction:-1] dark:bg-[#242627] md:max-w-[initial] lg:flex-row lg:group-even:flex-row-reverse lg:group-even:text-left"
    >
      <a
        href={demoLink}
        target="_blank"
        className="border-card group overflow-hidden rounded-lg lg:w-1/2"
      >
        <Image
          src={image}
          alt={`${title} preview`}
          className={cn("aspect-video object-cover", {
            "transition-transform duration-500 motion-safe:hover:scale-110":
              !!demoLink,
          })}
        />
      </a>
      <div className="flex flex-col items-end justify-between gap-6 lg:w-1/2 lg:group-even:items-start">
        <h3 className="text-heading font-medium">{title}</h3>
        <p className="z-10 rounded-lg bg-gray-50 from-gray-50 p-4 text-sm [text-wrap:balance] dark:bg-gray-900 dark:from-gray-900 sm:text-base md:p-6 lg:!bg-transparent lg:group-odd:-ml-12 lg:group-odd:bg-gradient-to-r lg:group-odd:!pr-0 lg:group-even:-mr-12 lg:group-even:bg-gradient-to-l lg:group-even:!pl-0">
          {description}
        </p>
        <ul className="flex flex-row flex-wrap justify-center gap-2 text-xs md:justify-end md:gap-4 md:text-sm">
          {tags.map(tag => (
            <li key={`project-showcase-${title}-{tag}`}>{tag}</li>
          ))}
        </ul>
        <div className="flex flex-row gap-4 text-lg">
          <a
            href={githubLink}
            target="_blank"
            aria-label="link to code"
            className="transition-colors hover:text-indigo-600 dark:hover:text-green-500"
          >
            <PiGithubLogoBold />
          </a>
          {demoLink && (
            <a
              href={demoLink}
              target="_blank"
              aria-label="link to demo"
              className="transition-colors hover:text-indigo-600 dark:hover:text-green-500"
            >
              <HiExternalLink />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
};

export default Project;
