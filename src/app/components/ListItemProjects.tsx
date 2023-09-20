"use client";

import React, { useEffect } from "react";
import Button from "./Button";
import Link from "next/link";
import VanillaTilt from "vanilla-tilt";

type Props = {
  project: Project;
};

export default function ListItemProjects({ project }: Props) {
  const {
    id,
    title,
    shortDescription,
    mainImg,
    projectType,
    date,
    technologies,
  } = project;

  // Sélectionnez l'élément .project
  const projectElement = document.querySelector(".project") as HTMLElement;

  // Vérifiez si l'élément existe avant d'initialiser VanillaTilt
  if (projectElement) {
    // Initialisez VanillaTilt avec l'élément .project
    VanillaTilt.init(projectElement, {
      max: 5,
      speed: 10,
      glare: true,
      "max-glare": 50,
    });
  }

  return (
    <Link href={`/projects/${id}`}>
      <div className="project">
        <h3>{title}</h3>
        <div className="content">
          <div className="img-container">
            <img src={mainImg} alt="" />
          </div>
          <div className="left">
            <p>{shortDescription}</p>
            <h4>
              {projectType} * {technologies} * {date.slice(6, 10)}
            </h4>
            <Button link={`/projects/${id}`} text="Voir le projet" />
          </div>
        </div>
      </div>
    </Link>
  );
}
