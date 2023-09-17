"use client";

import useSectionInView from "@/hooks/useSectionInView";
import { skills } from "@/lib/data";
import { headingFont } from "@/lib/fonts";

const Skills = () => {
    const { ref } = useSectionInView("skills");

    return (
        <section ref={ref} id="skills">
            <h2 className={`${headingFont.className} text-heading text-center pb-8`}>My Skills</h2>
            <ul className="flex w-5/6 mx-auto flex-row flex-wrap justify-center gap-4">
                {skills.map(skill => (
                    <li key={skill} className="card py-3 px-5 bg-card">{skill}</li>
                ))}
            </ul>
        </section>
    );
};

export default Skills;
