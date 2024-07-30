"use client";

import { experience } from "@/lib/data";
import { headingFont } from "@/lib/fonts";
import useSectionInView from "@/hooks/useSectionInView";
import { Fragment } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useTheme } from "@/context/theme";

export default function Experience() {
  const { ref } = useSectionInView("experience", 0.8);
  const { theme } = useTheme();

  return (
    <section
      ref={ref}
      id="experience"
    >
      <h2 className={`${headingFont.className} text-heading mb-12 text-center`}>
        Experience
      </h2>
      <VerticalTimeline
        animate={false}
        className="!sm:pb-72 !mt-15 !pb-40 min-[1170px]:!mb-36 min-[1170px]:!pb-36"
        lineColor={
          theme === "light"
            ? "linear-gradient(rgba(129, 140, 248, 0) 10%, rgb(129, 140, 248) 60%, rgba(129, 140, 248, 0))"
            : "linear-gradient(rgba(34, 197, 94, 0) 10%, rgb(34, 197, 94) 60%, rgba(34, 197, 94, 0))"
        }
      >
        {experience.map(
          (
            { title, location, description, icon: Icon, date, company },
            index,
          ) => (
            <Fragment key={index}>
              <VerticalTimelineElement
                visible={true}
                contentStyle={{
                  background:
                    theme === "light" ? "rgb(224, 231, 255)" : "rgb(9, 19, 3)",
                  boxShadow: "none",
                  border: "none",
                  textAlign: "left",
                  padding: "1.3rem 2rem",
                  borderRadius: "0.5rem",
                }}
                contentArrowStyle={{
                  borderRight:
                    theme === "light"
                      ? "0.4rem solid #9ca3af"
                      : "0.4rem solid rgba(255, 255, 255, 0.5)",
                }}
                date={date}
                icon={<Icon />}
                iconClassName="!neon-indigo dark:!neon-green bg-gray-100 dark:bg-gray-950 text-[5rem] border-none"
              >
                <div className="flex flex-row flex-wrap items-center">
                  <h3 className="text-lg font-semibold capitalize">{title}</h3>
                  {company && (
                    <span className="ml-auto text-sm text-gray-700 dark:text-white/75">
                      @{company}
                    </span>
                  )}
                </div>
                <p className="!mt-0 pb-1 text-sm font-normal opacity-80">
                  {location}
                </p>
                <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                  {description}
                </p>
              </VerticalTimelineElement>
            </Fragment>
          ),
        )}
      </VerticalTimeline>
    </section>
  );
}
