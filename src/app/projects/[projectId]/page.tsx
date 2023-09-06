import { getSortedProjectData } from "@/lib/projects";
import { notFound } from "next/navigation";

export function generateMetadata({
  params,
}: {
  params: { projectId: string };
}) {
  const projects = getSortedProjectData();
  const { projectId } = params;

  const project = projects.find((project) => project.id === projectId);
  if (!project) {
    return {
      title: "Post not found",
    };
  }

  return {
    title: project.title,
  };
}

export default async function Project({
  params,
}: {
  params: { projectId: string };
}) {
  const projects = getSortedProjectData();
  const { projectId } = params;

  if (!projects.find((project) => project.id === projectId)) {
    return notFound();
  }

  return <div>page</div>;
}
