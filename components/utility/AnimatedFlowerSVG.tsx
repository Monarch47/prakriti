import React from "react";
import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
  classname: string;
};

const AnimatedFlowerSVG = ({ children, classname }: Props) => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      fillRule="evenodd"
      clipRule="evenodd"
      imageRendering="optimizeQuality"
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
      className={classname}
    >
      {children}
    </motion.svg>
  );
};

export default AnimatedFlowerSVG;
