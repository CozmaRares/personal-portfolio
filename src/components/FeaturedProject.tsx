"use client";

import type { FeaturedProjectType } from "@/lib/data";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { headingFont } from "@/lib/fonts";
import TagList from "./TagList";
import { ExternalLink, Github } from "lucide-react";
import { useInView } from "react-intersection-observer";

const FeaturedProject = ({
  title,
  description,
  tags,
  githubLink,
  demoLink,
  image,
}: FeaturedProjectType) => {
  const { ref, inView } = useInView({ triggerOnce: true });

  const img = (
    <Image
      src={image}
      alt={`${title} preview`}
      className={cn("pointer-events-none aspect-video object-cover", {
        "duration-500 group-hover/img:scale-110 group-focus/img:scale-110 motion-safe:transition-transform":
          !!demoLink,
      })}
    />
  );

  return (
    <article
      className={cn(
        `card mx-auto flex h-full max-w-[650px] translate-x-[calc(var(--direction,1)*200px)] flex-col items-center gap-6 p-8
        opacity-0 duration-500
        group-even:[--direction:-1] motion-safe:transition-transform
        md:max-w-[initial] md:group-odd:[--direction:-1]
        md:group-even:[--direction:1] lg:flex-row
        lg:group-odd:text-right lg:group-odd:[--direction:1]
        lg:group-even:flex-row-reverse lg:group-even:[--direction:-1]`,
        { "translate-x-0 opacity-100": inView },
      )}
    >
      {demoLink ? (
        <a
          href={demoLink}
          target="_blank"
          className="border-card group/img overflow-hidden rounded-lg lg:w-1/2"
        >
          {img}
        </a>
      ) : (
        <div className="border-card overflow-hidden rounded-lg lg:w-1/2">
          {img}
        </div>
      )}
      <div className="flex w-full flex-grow flex-col justify-between gap-6 lg:w-1/2 lg:items-end lg:group-even:items-start">
        <h3 className={`${headingFont.className} text-heading font-medium`}>
          {title}
        </h3>
        <p
          ref={ref}
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
        <div className="flex flex-row gap-4 ">
          <a
            href={githubLink}
            target="_blank"
            aria-label="link to code"
            className="flex flex-row items-center gap-1 transition-colors hover:text-indigo-600 dark:hover:text-green-500"
          >
            Code <Github className="scale-75" />
          </a>
          {demoLink && (
            <a
              href={demoLink}
              target="_blank"
              aria-label="link to demo"
              className="flex flex-row items-center gap-1 transition-colors hover:text-indigo-600 dark:hover:text-green-500"
            >
              Demo <ExternalLink className="scale-75" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default FeaturedProject;
