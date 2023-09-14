import React from "react";
import Button from "./Button";
import Link from "next/link";

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
