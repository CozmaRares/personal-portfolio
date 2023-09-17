"use client";

import type { FeaturedProjectType } from "@/lib/data";
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
import { detailFont, headingFont } from "@/lib/fonts";

const FeaturedProject = ({
  title,
  description,
  tags,
  githubLink,
  demoLink,
  image,
}: FeaturedProjectType) => {
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
      className="border-card mx-auto flex h-full max-w-[650px] flex-col items-center gap-6 rounded-xl bg-indigo-100 p-8
      group-even:[--direction:-1] dark:bg-[#091303]
      md:max-w-[initial] md:group-odd:[--direction:-1]
      md:group-even:[--direction:1] lg:flex-row
      lg:group-odd:text-right
      lg:group-odd:[--direction:1] lg:group-even:flex-row-reverse lg:group-even:[--direction:-1]"
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
      <div className="flex w-full flex-grow flex-col justify-between gap-6 lg:w-1/2 lg:items-end lg:group-even:items-start">
        <h3
          className={`${headingFont.className} text-heading font-medium capitalize`}
        >
          {title}
        </h3>
        <p
          className="z-10 rounded-lg bg-gray-50 from-gray-50 p-4 text-sm [text-wrap:balance] dark:bg-gray-800 dark:from-gray-800
          sm:text-base md:p-6 lg:!bg-transparent
          lg:group-odd:-ml-12 lg:group-odd:bg-gradient-to-r lg:group-odd:!pr-0
          lg:group-even:-mr-12 lg:group-even:bg-gradient-to-l lg:group-even:!pl-0"
        >
          {description}
        </p>
        <ul
          className={`${detailFont.className} flex flex-row flex-wrap gap-2 text-sm capitalize md:gap-4`}
        >
          {tags.map(tag => (
            <li key={`project-showcase-${title}-${tag}`}>{tag}</li>
          ))}
        </ul>
        <div className="flex flex-row gap-4 text-lg">
          <a
            href={githubLink}
            target="_blank"
            aria-label="link to code"
            className="flex flex-row items-center gap-1 transition-colors hover:text-indigo-600 dark:hover:text-green-500"
          >
            Code <PiGithubLogoBold />
          </a>
          {demoLink && (
            <a
              href={demoLink}
              target="_blank"
              aria-label="link to demo"
              className="flex flex-row items-center gap-1 transition-colors hover:text-indigo-600 dark:hover:text-green-500"
            >
              Demo
              <HiExternalLink />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
};

export default FeaturedProject;
