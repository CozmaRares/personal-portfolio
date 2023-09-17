import type { ProjectType } from "@/lib/data";
import { PiGithubLogoBold } from "react-icons/pi";
import TagList from "./TagList";
import { createElement } from "react";
import { headingFont } from "@/lib/fonts";

const Project = ({
  title,
  description,
  tags,
  githubLink,
  icon,
}: ProjectType) => (
  <article className="card grid h-full grid-cols-[minmax(0,1fr),auto] grid-rows-[auto,minmax(0,1fr)] gap-y-4 p-7">
    <>{createElement(icon)}</>
    <a
      href={githubLink}
      target="_blank"
      aria-label="link to code"
      className="flex flex-row items-center gap-1 transition-colors hover:text-indigo-600 dark:hover:text-green-500"
    >
      Code <PiGithubLogoBold />
    </a>
    <div className="col-span-full flex flex-col justify-between gap-4">
      <h3 className={`${headingFont.className} text-heading`}>{title}</h3>
      <p className="">{description}</p>
      <TagList
        keyPrefix={`project-other-${title}`}
        tags={tags}
        className="justify-between"
      />
    </div>
  </article>
);

export default Project;
