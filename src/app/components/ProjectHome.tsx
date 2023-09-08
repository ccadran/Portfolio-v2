import { getSortedProjectData } from "@/lib/projects";
import ListItem from "./ListItem";

export default function ProjectHome() {
  const projects = getSortedProjectData();
  console.log(projects);

  return (
    <section>
      <ul>
        {projects.map((project) => (
          <ListItem key={project.id} project={project} />
        ))}
      </ul>
    </section>
  );
}
