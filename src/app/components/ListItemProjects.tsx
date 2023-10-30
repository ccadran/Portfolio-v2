"use client";

import React, { useEffect, useRef } from "react";
import Button from "./Button";
import Link from "next/link";
import VanillaTilt from "vanilla-tilt";
import { motion } from "framer-motion";

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

  const projectRef = useRef(null);

  useEffect(() => {
    const projectElement = projectRef.current;

    const options = {
      speed: 1000,
      max: 10,
      glare: false,
      "max-glare": 20,
      perspective: 1000,
    };

    if (projectElement) {
      VanillaTilt.init(projectElement, options);
    }
  }, []);

  return (
    <div className="project" ref={projectRef}>
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
          <Button
            link={`/projects/${id}`}
            text="Voir le projet"
            newTab={false}
          />
        </div>
      </div>
    </div>
  );
}
