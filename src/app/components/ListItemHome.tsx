import Link from "next/link";
type Props = {
  project: Project;
};

export default function ListItem({ project }: Props) {
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
    <li className={"project " + title}>
      <Link href={`/projects/${id}`}>
        <h5>{title}</h5>
        <div className="img-container">
          <img src={mainImg} alt="" />
        </div>
        <p>
          {projectType} * {technologies} * {date.slice(6, 10)}
        </p>
      </Link>
    </li>
  );
}
