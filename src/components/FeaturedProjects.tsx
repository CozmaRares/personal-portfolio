"use client";

import { projectData } from "@/lib/data";
import FeaturedProject from "./FeaturedProject";
import { headingFont } from "@/lib/fonts";
import useSectionInView from "@/hooks/useSectionInView";
import { motion } from "framer-motion";

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
        {projectData.featured.map((data, idx) => (
          <motion.li
            key={`project-showcase-${data.title}`}
            className="group"
            initial={{ x: idx % 2 == 0 ? 200 : -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
          >
            <FeaturedProject {...data} />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default FeaturedProjects;
