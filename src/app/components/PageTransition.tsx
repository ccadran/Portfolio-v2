// PageTransition.js
"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import "../../style/components/_pageTransition.scss";

const PageTransition = ({ title }: { title: string }) => {
  const [animationComplete, setAnimationComplete] = useState(false);

  const handleAnimationComplete = () => {
    setAnimationComplete(true);
  };
  useEffect(() => {
    if (animationComplete) {
      // À la fin de l'animation, changez le style pour display: none
      const pageTransitionDiv = document.querySelector(
        ".page-transition"
      ) as HTMLElement;
      if (pageTransitionDiv) {
        pageTransitionDiv.style.display = "none";
      }
    }
  }, [animationComplete]);

  // const [mouseY, setMouseY] = useState("50%");
  // const [mouseX, setMouseX] = useState("50%");

  // useEffect(() => {
  //   const handleMouseMove = (e: any) => {
  //     setMouseY(e.clientY);
  //     setMouseX(e.clientX);
  //   };
  //   window.addEventListener("mousemove", handleMouseMove);
  //   return () => {
  //     window.removeEventListener("mousemove", handleMouseMove);
  //   };
  // }, []);

  return (
    <motion.div
      className="page-transition"
      initial={{ opacity: 1 }}
      animate={{
        opacity: 0,
      }}
      exit={{ opacity: 1 }}
      transition={{
        duration: 0.5,
        ease: "easeIn",
        delay: 0.4,
        onComplete: handleAnimationComplete,
      }}
    >
      <motion.h1
        className="page-transition-title"
        initial={{ opacity: 1, display: "block" }}
        animate={{
          opacity: 0,
        }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4, ease: "easeIn", delay: 0.4 }}
      >
        {title}
      </motion.h1>
    </motion.div>
  );
};

export default PageTransition;
