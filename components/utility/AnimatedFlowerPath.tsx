import React from "react";
import { motion } from "framer-motion";

type Props = {};

const AnimatedFlowerPath = ({ d, props }: any) => {
  return (
    <motion.path
      stroke="#2b2a29"
      fill="transparent"
      strokeWidth="4"
      strokeLinecap="round"
      d={d}
      {...props}
    />
  );
};

export default AnimatedFlowerPath;
