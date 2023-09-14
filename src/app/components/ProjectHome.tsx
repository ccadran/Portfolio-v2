import { getSortedProjectData } from "@/lib/projects";
import ListItemHome from "./ListItemHome";
import "../../style/components/_projectHome.scss";

export default function ProjectHome() {
  const projects = getSortedProjectData();
  console.log(projects);

  return (
    <div className="projects-container">
      <ul>
        {projects.map((project) => (
          <ListItemHome key={project.id} project={project} />
        ))}
      </ul>
    </div>
  );
}
