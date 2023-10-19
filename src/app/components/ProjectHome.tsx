import { getSortedProjectData } from "@/lib/projects";
import ListItemHome from "./ListItemHome";
import "../../style/components/_projectHome.scss";
import Button from "./Button";

export default function ProjectHome() {
  const projects = getSortedProjectData();

  const filteredProjects = projects.filter((project) => project.order <= 4);

  return (
    <div className="projects-container">
      <ul>
        {filteredProjects.map((project) => (
          <ListItemHome key={project.id} project={project} />
        ))}
      </ul>
      <div className="btn-container">
        <Button text="View all projects !" link="/projects" newTab={false} />
      </div>
    </div>
  );
}
