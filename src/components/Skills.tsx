"use client";

import useSectionInView from "@/hooks/useSectionInView";
import { skills } from "@/lib/data";
import { headingFont } from "@/lib/fonts";
import { motion } from "framer-motion";

const staggerVariant = {
  initial: { y: 100, opacity: 0 },
  animate: (idx: number) => ({
    y: 0,
    opacity: 1,
    transition: { delay: idx * 0.05 },
  }),
};

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
      <ul className="space-bottom mx-auto flex flex-row flex-wrap justify-center gap-4 sm:w-5/6">
        {skills.map((skill, idx) => (
          <motion.li
            key={skill}
            className="card bg-card px-5 py-3"
            variants={staggerVariant}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={idx}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
