import { getProjectData, getSortedProjectData } from "@/lib/projects";
import { getLogosImgs } from "@/lib/logos";
import { notFound } from "next/navigation";
import Link from "next/link";
import Button from "@/app/components/Button";
import "../../../style/pages/_project.scss";
import PageTransition from "@/app/components/PageTransition";

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
    title: project.title + " - Clario Cadran",
    description: project.shortDescription,
    openGraph: {
      images: project.mainImg,
    },
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

  const logosImgs = await getLogosImgs(tools.logos);

  return (
    <main>
      <PageTransition title={title}></PageTransition>
      <section className="hero-project">
        <h1>{title}</h1>
        <div className="presentation">
          <h4>
            {projectType} * {technologies} * {date.slice(6, 10)}
          </h4>
          <p>{shortDescription}</p>
          <Button link={url} text="Voir le projet" newTab={true} />
        </div>
      </section>
      <div className="cover">
        <img src={mainImg} alt="" />
      </div>
      <section className="project-description">
        <div className="txt-project">
          <h4>{title}</h4>
          <p>{longDescription}</p>
        </div>
        <div className="img-project">
          {illustrationsImgs.map((illustrationImg) => (
            <div className="img-container" key={illustrationImg}>
              {illustrationImg.endsWith(".jpg") ||
              illustrationImg.endsWith(".png") ? (
                <img src={illustrationImg} />
              ) : illustrationImg.endsWith(".mp4") ? (
                <video autoPlay loop muted>
                  <source src={illustrationImg} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <p>Format non pris en charge</p>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="tools">
        <h2>Tools</h2>
        <div className="tools-container">
          <ul>
            {logosImgs.map((logoImg) => (
              <li key={logoImg}>
                <img src={logoImg} alt="" width="50px" height="50px" />
              </li>
            ))}
          </ul>
          {tools.toolsDescription&&
          <p>{tools.toolsDescription}</p>
          }
          <Button link={tools.urlGithub} text="Voir le code" newTab={true} />
        </div>
      </section>
    </main>
  );
}
