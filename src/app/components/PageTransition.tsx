// PageTransition.js
"use client";

// import { useEffect, useState } from "react";
// import { motion, useMotionValue } from "framer-motion";
// import "../../style/components/_pageTransition.scss";

// const PageTransition = ({ title }: { title: string }) => {
//   const [animationComplete, setAnimationComplete] = useState(false);

//   const handleAnimationComplete = () => {
//     setAnimationComplete(true);
//   };
//   useEffect(() => {
//     if (animationComplete) {
//       // À la fin de l'animation, changez le style pour display: none
//       const pageTransitionDiv = document.querySelector(
//         ".page-transition"
//       ) as HTMLElement;
//       if (pageTransitionDiv) {
//         pageTransitionDiv.style.display = "none";
//       }
//     }
//   }, [animationComplete]);

//   return (
//     <motion.div
//       className="page-transition"
//       initial={{ opacity: 1 }}
//       animate={{
//         opacity: 0,
//       }}
//       exit={{ opacity: 1 }}
//       transition={{
//         duration: 0.5,
//         ease: "easeIn",
//         delay: 0.4,
//         onComplete: handleAnimationComplete,
//       }}
//     >
//       <motion.h1
//         className="page-transition-title"
//         initial={{ opacity: 1, display: "block" }}
//         animate={{
//           opacity: 0,
//         }}
//         exit={{ opacity: 0 }}
//         transition={{ duration: 0.4, ease: "easeIn", delay: 0.4 }}
//       >
//         {title}
//       </motion.h1>
//     </motion.div>
//   );
// };

// export default PageTransition;

import React, { useState, useEffect } from "react";
import "../../style/components/_pageTransition.scss";
import { motion } from "framer-motion";

const anim = {
  initial: {
    opacity: 1,
  },
  open: (i) => ({
    opacity: 0,
    transition: { duration: 0, delay: 0.05 * i },
  }),
  closed: (i) => ({
    opacity: 1,
    transition: { duration: 0, delay: 0.05 * i },
  }),
};

export default function index({}) {
  const handleAnimationComplete = () => {
    const pixelBackground = document.querySelector(
      ".pixelBackground"
    ) as HTMLElement;
    if (pixelBackground) {
      pixelBackground.style.display = "none";
    }
  };

  const shuffle = (a) => {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
    }
    return a;
  };

  const getBlocks = () => {
    const { innerWidth, innerHeight } = window;
    const blockSize = innerWidth * 0.05;
    const nbOfBlocks = Math.ceil(innerHeight / blockSize);
    const delays = shuffle([...Array(nbOfBlocks)].map((_, i) => i));
    return delays.map((randomDelay, i) => {
      return (
        <motion.div
          className="block"
          variants={anim}
          initial="initial"
          animate="open"
          exit="closed"
          custom={randomDelay}
        ></motion.div>
      );
    });
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{
        opacity: 0,
      }}
      exit={{ opacity: 1 }}
      transition={{
        duration: 0.5,
        ease: "easeIn",
        delay: 0.4,
      }}
      onAnimationComplete={handleAnimationComplete}
      className="pixelBackground"
    >
      {[...Array(20)].map((_, i) => {
        return <div className="column">{getBlocks()}</div>;
      })}
    </motion.div>
  );
}
