// "use client";

import Image from "next/image";
import { Inter } from "next/font/google";
import ProjectHome from "./components/ProjectHome";
import "../style/pages/_home.scss";
import Link from "next/link";
import { Metadata } from "next";
import Button from "./components/Button";
import PageTransition from "./components/PageTransition";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Preloader from "./components/preloader/Preloader";

export const metadata: Metadata = {
  title: "Portfolio - Clario Cadran",
  description:
    "Dans ce portfolio, découvrez les projets de Clario Cadran, développeur web à Bordeaux. Consultez ses réalisations en matière de développement front-end sur son portfolio et contactez-le pour discuter de vos projets de développement web.",
  keywords:
    "développement web, création de sites, internet, portfolio, clario, Bordeaux",
  openGraph: {
    images: "/assets/images/og-image.png",
  },
};
export default function Home() {
  
  return (
    <main>
      <PageTransition title="Clario Cadran"></PageTransition>
      <section className="hero">
        <h1 data-scroll data-scroll-speed="0.3">
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
          <div className="text-container">
            <p>
              Bienvenue sur mon Portfolio ! <br />
              <br />
              Je suis un développeur front-end, actuellement en alternance chez <a href="https://studio9p.com/">Studio9p</a> dans le cadre de ma troisième année de BUT MMI (Métiers du Multimédia et de l’Internet). <br /> <br />
              Dans ce portfolio vous allez pouvoir retrouver certains projets que j’ai réalisés, que ce soit dans le cadre de mes études ou durant mon temps libre.
            </p>
            <Button
              link="/assets/CV_Clario_CADRAN_2025.pdf"
              text="Voir mon CV"
              newTab={true}
            />
          </div>
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
              <img src="/assets/logos/Linkedin-white.svg" alt="" />
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
