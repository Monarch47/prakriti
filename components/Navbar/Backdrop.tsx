import React, { useState } from "react";
import { motion } from "framer-motion";

type Props = {};

const Backdrop = ({ children, onClick }: any) => {
  return (
    <motion.div
      className={`absolute top-0 left-0 h-full w-full bg-black/20 flex justify-center md:hidden`}
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
};

export default Backdrop;
