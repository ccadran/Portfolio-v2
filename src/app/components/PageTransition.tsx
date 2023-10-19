"use client";

import React, { useEffect } from "react";
import "../../style/components/_pageTransition.scss";
import { motion, Variants } from "framer-motion";

type AnimationVariants = Variants;

const anim: AnimationVariants = {
  initial: {
    opacity: 1,
  },
  open: (i: number) => ({
    opacity: 0,
    transition: { duration: 0, delay: 0.05 * i },
  }),
  closed: (i: number) => ({
    opacity: 1,
    transition: { duration: 0, delay: 0.05 * i },
  }),
};

export default function Index({ title }) {
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
        delay: 4,
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
      <h1 className="title">{title}</h1>
    </motion.div>
  );
}
