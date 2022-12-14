import React from "react";
import { motion, useCycle } from "framer-motion";

const loaderVariants = {
  animationOne: {
    x: [-20, 20],
    y: [0, -30],
    transition: {
      x: {
        yoyo: Infinity,
        duration: 0.5,
      },
      y: {
        yoyo: Infinity,
        duration: 0.25,
        ease: "easeOut",
      },
    },
  },
  animationTwo: {
    y: [0, -40],
    x: 0,
    transition: {
      yoyo: Infinity,
      duration: 0.25,
      ease: "easeOut",
    },
  },
};

const Loader = () => {
  const [animation, cycleAnimation] = useCycle("animationOne", "animationTwo");

  return (
    <>
      <motion.div
        className="loader"
        variants={loaderVariants}
        animate={animation}
      />
      <div
        onClick={() => cycleAnimation()}
        style={{
          border: "1px solid white",
          width: 100,
          borderRadius: 15,
          margin: "auto",
          padding: 10,
          cursor: "pointer",
        }}
      >
        Change animation
      </div>
    </>
  );
};

export default Loader;
