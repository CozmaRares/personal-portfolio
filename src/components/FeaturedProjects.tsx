"use client";

import { projectData } from "@/lib/data";
import FeaturedProject from "./FeaturedProject";
import { headingFont } from "@/lib/fonts";
import useSectionInView from "@/hooks/useSectionInView";

const FeaturedProjects = () => {
  const { ref } = useSectionInView("projects", 0.2);

  return (
    <section
      ref={ref}
      className="relative scroll-m-48"
      id="projects"
    >
      <h2
        className={`${headingFont.className} text-heading absolute -top-16 left-1/2 -translate-x-1/2`}
      >
        Projects
      </h2>
      <ul className="grid gap-8 px-[2px] pb-2 md:grid-cols-2 md:gap-4 lg:grid-cols-1 lg:gap-14">
        {projectData.featured.map(data => (
          <li
            key={`project-showcase-${data.title}`}
            className="group"
          >
            <FeaturedProject {...data} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default FeaturedProjects;
