import React from "react";

import ProjectProjects from "../components/ProjectProjects";

export default function ProjectsPage() {
  return (
    <main>
      <section className="hero">
        <h1>Projects</h1>
        <p>
          L'esnemble de mes projets réalisés lors de ma formation où lors de mon
          temps personnel.
        </p>
      </section>
      <ProjectProjects />
    </main>
  );
}
