"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import "../../style/components/_nav.scss";

export default function Navbar() {
  // Toggle navbar on scroll
  // useEffect(() => {
  //   let lastScroll = 0;
  //   const nav = document.querySelector("nav");
  //   const btnBurger = document.getElementById("btn");

  //   if (nav) {
  //     window.addEventListener("scroll", () => {
  //       if (btnBurger?.classList.contains("active")) {
  //         // Ajoutez ici la logique pour gérer le défilement lorsque le bouton burger est actif
  //       } else {
  //         if (window.scrollY < lastScroll) {
  //           nav.style.top = "0"; // Assurez-vous d'ajouter une valeur de chaîne pour 'top'
  //         } else {
  //           nav.style.top = "-100px"; // Assurez-vous d'ajouter une valeur de chaîne pour 'top'
  //         }
  //       }

  //       lastScroll = window.scrollY;
  //     });
  //   }
  // }, []);

  // //Btn burger
  // const [isBurgerActive, setIsBurgerActive] = useState(false);

  // const handleBurgerClick = () => {
  //   setIsBurgerActive(!isBurgerActive);
  // };

  const [isResponsiveNavOpen, setResponsiveNavOpen] = useState(false);
  const toggleResponsiveNav = () => {
    setResponsiveNavOpen(!isResponsiveNavOpen);
  };
  useEffect(() => {
    if (isResponsiveNavOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isResponsiveNavOpen]);

  //FEATURE NAVIGATION HIDE ON SCROLL DOWN

  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollDirection, setScrollDirection] = useState("up");
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    const handleScrollDirection = () => {
      const currentScrollPosition = window.scrollY;
      if (currentScrollPosition > scrollPosition) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }
      setScrollPosition(currentScrollPosition);
    };

    window.addEventListener("scroll", handleScrollDirection);

    return () => {
      window.removeEventListener("scroll", handleScrollDirection);
    };
  }, [scrollPosition]);
  return (
    <>
      {/* <nav className={isBurgerActive ? "active" : ""}>
        <div className="nav-container">
          <Link href="/">
            <h4>Home</h4>
          </Link>
          <ul className={isBurgerActive ? "active" : ""}>
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
          <div
            className={`toggle-btn ${isBurgerActive ? "active" : ""}`}
            id="btn"
            onClick={handleBurgerClick}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav> */}
      {/* // TEST */}
      <nav className={scrollDirection === "down" ? "hide" : "show"}>
        <div className={isResponsiveNavOpen ? "nav-home active" : "nav-home"}>
          <Link href="/">
            <h4>Home</h4>
          </Link>
        </div>{" "}
        <div
          className={isResponsiveNavOpen ? "nav-links responsive" : "nav-links"}
        >
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
        </div>
        <div
          className={isResponsiveNavOpen ? "toggle-btn active" : "toggle-btn"}
          onClick={toggleResponsiveNav}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </>
  );
}
