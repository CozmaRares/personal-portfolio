"use client";

import type { FeaturedProjectType } from "@/lib/data";
import Image from "next/image";
import { cn } from "@/lib/utils";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import { headingFont } from "@/lib/fonts";
import TagList from "./TagList";
import { ExternalLink, Github } from "lucide-react";

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
  const transform = useMotionTemplate`translateX(calc(var(--direction, 1) * 500px * (1 - ${scrollYProgress})))`;
  const opacity = useTransform(() => 0.5 + scrollYProgress.get() ** 4 / 2);

  const img = (
    <Image
      src={image}
      alt={`${title} preview`}
      className={cn("pointer-events-none aspect-video object-cover", {
        "duration-500 group-hover:scale-110 group-focus:scale-110 motion-safe:transition-transform":
          !!demoLink,
      })}
    />
  );

  return (
    <motion.article
      ref={ref}
      style={{ transform, opacity }}
      className="card mx-auto flex h-full max-w-[650px] flex-col items-center gap-6 p-8
      group-even:[--direction:-1]
      md:max-w-[initial] md:group-odd:[--direction:-1]
      md:group-even:[--direction:1] lg:flex-row
      lg:group-odd:text-right lg:group-odd:[--direction:1]
      lg:group-even:flex-row-reverse lg:group-even:[--direction:-1]"
    >
      {demoLink ? (
        <a
          href={demoLink}
          target="_blank"
          className="border-card group overflow-hidden rounded-lg lg:w-1/2"
        >
          {img}
        </a>
      ) : (
        <div className="border-card group overflow-hidden rounded-lg lg:w-1/2">
          {img}
        </div>
      )}
      <div className="flex w-full flex-grow flex-col justify-between gap-6 lg:w-1/2 lg:items-end lg:group-even:items-start">
        <h3 className={`${headingFont.className} text-heading font-medium`}>
          {title}
        </h3>
        <p
          className="z-10 rounded-lg bg-gray-50 from-gray-50 p-4 text-sm 
          dark:bg-gray-800 dark:from-gray-800
          sm:text-base md:p-6 lg:!bg-transparent
          lg:group-odd:-ml-12 lg:group-odd:bg-gradient-to-r lg:group-odd:!pr-0
          lg:group-even:-mr-12 lg:group-even:bg-gradient-to-l lg:group-even:!pl-0"
        >
          {description}
        </p>
        <TagList
          keyPrefix={`project-showcase-${title}`}
          tags={tags}
        />
        <div className="flex flex-row gap-4 text-lg">
          <a
            href={githubLink}
            target="_blank"
            aria-label="link to code"
            className="flex flex-row items-center gap-1 transition-colors hover:text-indigo-600 dark:hover:text-green-500"
          >
            Code <Github />
          </a>
          {demoLink && (
            <a
              href={demoLink}
              target="_blank"
              aria-label="link to demo"
              className="flex flex-row items-center gap-1 transition-colors hover:text-indigo-600 dark:hover:text-green-500"
            >
              Demo <ExternalLink />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
};

export default FeaturedProject;
