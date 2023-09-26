"use client";

import useSectionInView from "@/hooks/useSectionInView";
import { skills } from "@/lib/data";
import { headingFont } from "@/lib/fonts";
import { motion } from "framer-motion";

const Skills = () => {
  const { ref } = useSectionInView("skills", 0.75);

  return (
    <section ref={ref}>
      <Divider />
      <motion.h2
        id="skills"
        className={`${headingFont.className} text-heading scroll-mt-32 pb-8 text-center`}
        initial={{ y: 100, opacity: 0 }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
      >
        My Skills
      </motion.h2>
      <ul className="mx-auto flex flex-row flex-wrap justify-center gap-2 md:w-5/6">
        {skills.map((skill, idx) => (
          <motion.li
            key={skill}
            className="card bg-card px-5 py-3"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: { delay: (idx + 1) * 0.05 },
            }}
            viewport={{ once: true }}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
      <Divider />
    </section>
  );
};

export default Skills;

const Divider = () => (
  <div className="mx-auto mt-32 w-1 rounded-full bg-indigo-800 neon-indigo dark:bg-green-300 dark:neon-green sm:my-24 sm:h-28" />
);
