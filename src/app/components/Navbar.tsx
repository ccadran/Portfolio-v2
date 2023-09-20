"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import "../../style/components/_nav.scss";

export default function Navbar() {
  useEffect(() => {
    let lastScroll = 0;
    const nav = document.querySelector("nav");
    const btnBurger = document.getElementById("btn");

    if (nav) {
      window.addEventListener("scroll", () => {
        if (btnBurger?.classList.contains("active")) {
          // Ajoutez ici la logique pour gérer le défilement lorsque le bouton burger est actif
        } else {
          if (window.scrollY < lastScroll) {
            nav.style.top = "0"; // Assurez-vous d'ajouter une valeur de chaîne pour 'top'
          } else {
            nav.style.top = "-100px"; // Assurez-vous d'ajouter une valeur de chaîne pour 'top'
          }
        }

        lastScroll = window.scrollY;
      });
    }
  }, []);

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
