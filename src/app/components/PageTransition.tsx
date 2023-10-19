"use client";

import React, { useEffect } from "react";
import "../../style/components/_pageTransition.scss";
import { motion, Variants } from "framer-motion";

type AnimationVariants = Variants;

const anim: AnimationVariants = {
  initial: {
    opacity: 1,
    transition: { delay: 1 }, // Ajouter un délai d'1 seconde
  },
  open: (i: number) => ({
    opacity: 0,
    transition: { duration: 0, delay: 0.1 * i },
  }),
  closed: (i: number) => ({
    opacity: 1,
    transition: { duration: 0, delay: 0.1 * i },
  }),
};

export default function Index({ title }: { title: string }) {
  const handleAnimationComplete = () => {
    const pixelBackground = document.querySelector(
      ".pixelBackground"
    ) as HTMLElement | null;
    if (pixelBackground) {
      pixelBackground.style.display = "none";
    }
  };

  const shuffle = (a: number[]) => {
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
    if (typeof window !== "undefined") {
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
            key={i}
          ></motion.div>
        );
      });
    }
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
      }}
      onAnimationComplete={handleAnimationComplete}
      className="pixelBackground"
    >
      {[...Array(20)].map((_, i) => {
        return (
          <div className="column" key={i}>
            {getBlocks()}
          </div>
        );
      })}
      {/* <h1 className="title">{title}</h1> */}
    </motion.div>
  );
}
