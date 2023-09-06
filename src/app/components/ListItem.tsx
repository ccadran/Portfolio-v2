import Link from "next/link";
type Props = {
  project: Project;
};

export default function ListItem({ project }: Props) {
  const {
    id,
    title,

    shortDescription,
  } = project;
  return (
    <li className="p-8">
      <Link href={`/projects/${id}`}>{title}</Link>
      <p>{shortDescription}</p>
    </li>
  );
}
