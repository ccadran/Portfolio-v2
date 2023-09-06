import { getProjectData, getSortedProjectData } from "@/lib/projects";
import { notFound } from "next/navigation";
import Link from "next/link";

export function generateStaticParams() {
  const projects = getSortedProjectData();
  return projects.map((project) => ({
    projectId: project.id,
  }));
}

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

  const {
    title,
    projectType,
    technologies,
    date,
    shortDescription,
    url,
    mainImg,
    illustrationsImgs,
    longDescription,
    tools,
    contentHtml,
  } = await getProjectData(projectId);

  return (
    <main>
      <h2>{title}</h2>
      <p>
        {projectType}
        {date}
      </p>
      <p>{shortDescription}</p>
      <Link href={url}>Visit the project</Link>
      <p>{longDescription}</p>
      <p>{tools.logos}</p>
      <p>{tools.toolsDescription}</p>
      <Link href={tools.urlGithub}>Github</Link>{" "}
    </main>
  );
}
