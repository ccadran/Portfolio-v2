import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <h4>
        <Link href="/">Home</Link>
      </h4>
      <ul>
        <Link href="/projects">Projects</Link> <Link href="/">About</Link>{" "}
        <Link href="/">Skills</Link>
        <Link href="/">Contact</Link>
      </ul>
    </nav>
  );
}
