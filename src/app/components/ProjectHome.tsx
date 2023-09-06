import { getSortedPostData } from "@/lib/projects";

export default function ProjectHome() {
  const projects = getSortedPostData();
  console.log(projects);

  return <div>yoo</div>;
}
