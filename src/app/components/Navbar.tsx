"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Curve from "./Curve";
import "../../style/components/_nav.scss";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

const menuSlide = {
  initial: {
    // x: "calc(100% + 100px)",
    transform: "translateX(calc(100% + 100px))",
  },
  enter: {
    transform: "translateX(0%)",
    transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1] },
  },
  exit: {
    transform: "translateX(calc(100% + 100px))",
    transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1] },
  },
};
const liSlide = {
  initial: {
    opacity: 0,
    transform: "translateX(50px)",
  },
  enter: (i) => ({
    opacity: 1,
    transform: "translateX(0px)",
    transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: 0.15 * i },
  }),
  exit: (i) => ({
    opacity: 0,
    transform: "translateX(50px)",

    transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: 0.15 * i },
  }),
};

const navItems = [
  {
    name: "Projects",
    link: "/projects",
  },
  {
    name: "About me",
    link: "/#about",
  },
  {
    name: "Contact",
    link: "/#contact",
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isResponsiveNavOpen, setResponsiveNavOpen] = useState(false);
  const toggleResponsiveNav = () => {
    setResponsiveNavOpen(!isResponsiveNavOpen);
  };
  useEffect(() => {
    if (isResponsiveNavOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isResponsiveNavOpen]);
  const closeResponsiveNav = () => {
    setResponsiveNavOpen(false);
  };

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
      <nav className={scrollDirection === "down" ? "hide" : "show"}>
        <div className={isResponsiveNavOpen ? "nav-home active" : "nav-home"}>
          <Link
            href="/"
            onClick={closeResponsiveNav}
            className={`link ${pathname === "/" ? "active" : ""}`}
          >
            <h4>Home</h4>
          </Link>
        </div>{" "}
        <AnimatePresence mode="wait">
          {isResponsiveNavOpen && (
            <motion.div
              variants={menuSlide}
              animate="enter"
              exit="exit"
              initial="initial"
              className={
                isResponsiveNavOpen ? "nav-links responsive" : "nav-links"
              }
            >
              <ul>
                {navItems.map((item, index) => {
                  return (
                    <motion.li
                      key={index}
                      custom={index}
                      variants={liSlide}
                      animate="enter"
                      exit="exit"
                      initial="initial"
                    >
                      <Link
                        href={item.link}
                        className={` ${
                          pathname === item.link ? "active" : ""
                        } `}
                        onClick={closeResponsiveNav}
                      >
                        {item.name}
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>
              <Curve />
            </motion.div>
          )}
        </AnimatePresence>
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
