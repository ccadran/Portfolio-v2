import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="main-footer">
        <div className="left-footer">
          <ul>
            <Link href="/">Home</Link>
            <Link href="/projects">Home</Link>
            <Link href="/">Skills</Link>
            <Link href="/">Contact</Link>
          </ul>
          <div className="footer-contact">
            <ul>
              <Link
                href="https://www.linkedin.com/in/clario-cadran-82b20b209/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/" alt="" />
              </Link>
              <Link
                href="https://www.instagram.com/clario_cdrn/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/" alt="" />
              </Link>
              <Link
                href="https://github.com/ccadran"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/" alt="" />
              </Link>
            </ul>
          </div>
        </div>
        <div className="right-footer">
          <p>
            Pour toute idée de projets contactez-moi sur ces réseaux sociaux ou
            bien sur cette adresse mail !
          </p>
        </div>
        <div className="under-footer">
          <button id="legal">
            <a href="/mention-legal">Mentions légales</a>
          </button>
          <p>Copyright © 2023. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
