import { motion, useAnimation } from "framer-motion";
import React, { useRef, useState } from "react";
import Backdrop from "./Backdrop";
import ActiveLinkSM from "./ActiveLinkSM";

type Props = {};

const modalVariants = {
  hidden: {
    y: "-100vh",
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
    },
  },
  exit: {
    opacity: 0,
    y: "100vh",
    transition: {
      duration: 0.75,
    },
  },
};

const childVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {},
  },
  exit: {
    opacity: 0,
  },
};

const NavbarModal = ({ handleClose }: any) => {
  const navLinksSM = ["/", "About", "Services", "Contact"];
  const renderNavLinksSM = navLinksSM.map((link, index) => {
    if (index === 0) {
      return (
        <motion.div variants={childVariants} key={index}>
          <ActiveLinkSM href={link}>Home</ActiveLinkSM>
        </motion.div>
      );
    } else {
      return (
        <motion.div variants={childVariants} key={index}>
          <ActiveLinkSM href={link}>{link}</ActiveLinkSM>
        </motion.div>
      );
    }
  });

  return (
    <Backdrop onClick={handleClose}>
      <motion.nav
        className="w-full h-full flex flex-col gap-2 fixed top-0 left-0"
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className="px-4">
          <button onClick={handleClose}></button>
        </div>
        <motion.div className="flex flex-col h-3/4 py-2 justify-center items-center gap-20">
          {renderNavLinksSM}
        </motion.div>
      </motion.nav>
    </Backdrop>
  );
};

export default NavbarModal;
