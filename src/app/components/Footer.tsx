import Link from "next/link";
import "../../style/components/_footer.scss";

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
            <p>clar.cadran@gmail.com</p>
            <ul>
              <Link
                href="https://www.linkedin.com/in/clario-cadran-82b20b209/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/assets/logos/linkedin-black.svg" alt="" />
              </Link>
              <Link
                href="https://www.instagram.com/clario_cdrn/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/assets/logos/Instagram-black.svg" alt="" />
              </Link>
              <Link
                href="https://github.com/ccadran"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/assets/logos/Github-black.svg" alt="" />
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
      </div>
      <div className="under-footer">
        <button id="legal">
          <a href="./mentions legales/mentions.html">Mentions légales</a>
        </button>
        <p>Copyright © 2022. Tous droits réservés.</p>
      </div>
    </footer>
  );
}
