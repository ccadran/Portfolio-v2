import Link from "next/link";
import "../../style/components/_nav.scss";

export default function Navbar() {
  return (
    <nav>
      <div className="nav-container">
        <Link href="/">
          <h4>Home</h4>
        </Link>
        <ul>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
          <li>
            <Link href="/#about">About me</Link>
          </li>
          <li>
            <Link href="/#skills">Skills</Link>
          </li>
          <li>
            <Link href="/#contact">Contact</Link>
          </li>
        </ul>
        <div className="toggle-btn" id="btn">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
}
