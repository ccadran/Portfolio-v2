import { Metadata } from "next";
import ProjectProjects from "../components/ProjectProjects";
import "../../style/pages/_projects.scss";
import PageTransition from "../components/PageTransition";

export const metadata: Metadata = {
  title: "Projets - Clario Cadran",
  description:
    "Retrouvez l'ensemble des projets de développement web de Clario Cadran, développeur web à Bordeaux. ",
  keywords: "développement web, création de sites, internet, portfolio, clario",
  openGraph: {
    images: "/assets/images/og-image-projets.png",
  },
};
export default function ProjectsPage() {
  return (
    <main>
      <PageTransition title="Projects"></PageTransition>
      <section className="hero">
        <h1>Projects</h1>
        <p>
          L'ensemble de mes projets réalisés lors de ma formation où lors de mon
          temps personnel.
        </p>
      </section>
      <ProjectProjects />
    </main>
  );
}
