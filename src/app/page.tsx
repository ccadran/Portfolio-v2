import Image from "next/image";
import { Inter } from "next/font/google";
import ProjectHome from "./components/ProjectHome";
import "../style/pages/_home.scss";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <section className="hero">
        <h1>
          Clario <br />
          Cadran
        </h1>
        <h3>Web developer</h3>
      </section>
      <section className="about-me" id="about">
        <h2>About me</h2>
        <div className="about-me__container">
          <div className="img-container">
            <img src="/assets/images/about.jpg" alt="" />
          </div>
          <p>
            Bienvenue sur mon Portfolio ! <br />
            <br />
            Je suis Clario Cadran, passionné par le développement web dans son
            ensemble et pour l’instant plus orienté sur le front-end. <br />
            <br />
            Je suis actuellement Étudiant en première année du BUT MMI (Métiers
            du Multimédia et de l’Internet) à Bordeaux.
            <br />
            <br />
            Dans ce portfolio vous allez pouvoir retrouver tous les projets que
            j’ai pu réaliser dans le cadre de mes études et à côté de celles-ci.
          </p>
        </div>
      </section>
      <section className="projects-home">
        <h2>Projects</h2>
        <p>
          L’ensemble de mes projets réalisés durant mes années MMI et mon temps
          personnel.
          <br />
          Principalement en développement web mais également en photographies,
          montages, audio-visuels…
        </p>
        <ProjectHome />
      </section>
      <section id="contact" className="contact">
        <h2>Contact me</h2>
        <div className="infos-contact">
          <a href="mailto:clar.cadran@gmail.com" id="mail">
            clar.cadran@gmail.com{" "}
          </a>
          <ul>
            <Link
              href="https://www.linkedin.com/in/clario-cadran-82b20b209/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/assets/logos/linkedin-white.svg" alt="" />
            </Link>
            <Link
              href="https://www.instagram.com/clario_cdrn/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/assets/logos/Instagram-white.svg" alt="" />
            </Link>
            <Link
              href="https://github.com/ccadran"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/assets/logos/Github-white.svg" alt="" />
            </Link>
          </ul>
        </div>
      </section>
    </main>
  );
}
