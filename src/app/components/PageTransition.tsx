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
      const pageTransitionDiv = document.querySelector(".page-transition");
      if (pageTransitionDiv) {
        pageTransitionDiv.style.display = "none";
      }
    }
  }, [animationComplete]);

  const mouseY = useMotionValue(0);

  const mousePosition = (e: any) => {
    mouseY.set(e.clientY);
  };

  return (
    <motion.div
      className="page-transition"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0, height: "50px", width: "50px", top: mouseY }}
      exit={{ opacity: 1 }}
      transition={{ duration: 3, onComplete: handleAnimationComplete }}
      onMouseMove={mousePosition}
    >
      <h1 className="page-transition-title">{title}</h1>
    </motion.div>
  );
};

export default PageTransition;
