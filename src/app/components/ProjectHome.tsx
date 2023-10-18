import { getSortedProjectData } from "@/lib/projects";
import ListItemHome from "./ListItemHome";
import "../../style/components/_projectHome.scss";

export default function ProjectHome() {
  const projects = getSortedProjectData();

  // Filtrer les projets avec project.order < 4
  const filteredProjects = projects.filter((project) => project.order <= 4);

  return (
    <div className="projects-container">
      <ul>
        {filteredProjects.map((project) => (
          <ListItemHome key={project.id} project={project} />
        ))}
      </ul>
    </div>
  );
}
