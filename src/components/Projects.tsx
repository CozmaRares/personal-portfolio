import { projectData } from "@/lib/data";
import Project from "./Project";

const Projects = () => (
  <section className="relative">
    <h2 className="text-heading absolute -top-16 left-1/2 -translate-x-1/2 ">
      Projects
    </h2>
    <ul className="space-y-16">
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
