import { getSortedProjectData } from "@/lib/projects";
import ListItemProjects from "./ListItemProjects";
import "../../style/components/_projectProjects.scss";

const projects = getSortedProjectData();
console.log(projects);

export default function ProjectProjects() {
  return (
    <section className="projects">
      {projects.map((project) => (
        <ListItemProjects key={project.id} project={project} />
      ))}
    </section>
  );
}
