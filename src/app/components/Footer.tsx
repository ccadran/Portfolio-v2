import Link from "next/link";
import "../../style/components/_footer.scss";
import ButtonBlack from "./ButtonBlack";

export default function Footer() {
  return (
    <footer>
      <div className="main-footer">
        <div className="left-footer">
          <ul>
            <li>
              <Link href="/projects">Projects</Link>
            </li>
            <li>
              <Link href="/#about">About me</Link>
            </li>
            <li>
              <Link href="/#contact">Contact</Link>
            </li>
          </ul>
          <div className="footer-contact">
            <a href="mailto:clar.cadran@gmail.com" id="mail">
              clar.cadran@gmail.com{" "}
            </a>
            <ul>
              <Link
                href="https://www.linkedin.com/in/clario-cadran-82b20b209/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/assets/logos/Linkedin-black.svg" alt="" />
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
                <img src="/assets/logos/github-black.svg" alt="" />
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
        <ButtonBlack
          link="/mentions-legales"
          text="Mentions légales"
          newTab={false}
        />
        <p>Copyright © 2023. Tous droits réservés.</p>
      </div>
    </footer>
  );
}
