import Link from "next/link";
import "../../style/components/_nav.scss";

export default function Navbar() {
  return (
    <nav>
      <div className="nav-container">
        <h4>Home</h4>
        <ul>
          <li>
            <a href="./Projects/projects.html">Projects</a>
          </li>
          <li>
            <a className="burger-child" href="#about">
              About Me
            </a>
          </li>
          <li>
            <a className="burger-child" href="#skills">
              Skills
            </a>
          </li>
          <li>
            <a className="burger-child" href="#contact">
              Contact
            </a>
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
