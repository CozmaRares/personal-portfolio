import { projectData } from "@/lib/data";
import Project from "./Project";

const Projects = () => (
  <section className="relative">
    <h2 className="text-heading absolute -top-16 left-1/2 -translate-x-1/2 ">
      Projects
    </h2>
    <ul className="grid w-[99.9%] gap-8 overflow-x-hidden md:grid-cols-2 md:gap-4 lg:grid-cols-1 lg:gap-14">
      {projectData.showcase.map(data => (
        <li
          key={`project-showcase-${data.title}`}
          className="group"
        >
          <Project {...data} />
        </li>
      ))}
    </ul>
  </section>
);

export default Projects;
