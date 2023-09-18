"use client";

import useSectionInView from "@/hooks/useSectionInView";
import { skills } from "@/lib/data";
import { headingFont } from "@/lib/fonts";

const Skills = () => {
  const { ref } = useSectionInView("skills");

  return (
    <section
      ref={ref}
      id="skills"
    >
      <h2 className={`${headingFont.className} text-heading pb-8 text-center`}>
        My Skills
      </h2>
      <ul className="mx-auto flex w-5/6 flex-row flex-wrap justify-center gap-4">
        {skills.map(skill => (
          <li
            key={skill}
            className="card bg-card px-5 py-3"
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
