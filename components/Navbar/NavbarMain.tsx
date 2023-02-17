import React, { useState } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import NavbarModal from "./NavbarModal";
import ActiveLink from "./ActiveLink";
import AnimatedFlowerSVG from "../utility/AnimatedFlowerSVG";
import AnimatedFlowerPath from "../utility/AnimatedFlowerPath";
import { flowerPathClosed, flowerPathOpen } from "../utility/pathExamples";

type Props = {
  toggle: boolean;
  open: () => void;
  close: () => void;
  isPlaying: boolean;
  setIsPlaying: (isPlaying: boolean) => void;
};

const navLinks = ["/", "About", "logo", "Services", "Contact"];

const flowerVariants = {
  open: {
    d: flowerPathOpen,
  },
  closed: {
    d: flowerPathClosed,
  },
};

const NavbarMain = ({ toggle, open, close }: Props) => {
  const renderNavLinks = navLinks.map((link, index) => {
    if (index === 0) {
      return (
        <ActiveLink href={link} key={index}>
          {"Home"}
        </ActiveLink>
      );
    } else if (index === 2) {
      return (
        <ActiveLink href={link} key={index}>
          <div className="flex items-center justify-center">
            <img
              src={`/assets/icons/logo_black.svg`}
              alt="icon"
              className="h-36 absolute"
            />
          </div>
        </ActiveLink>
      );
    } else {
      return (
        <ActiveLink href={link} key={index}>
          {link}
        </ActiveLink>
      );
    }
  });

  return (
    <>
      {toggle && <NavbarModal toggle={toggle} handleClose={close} />}
      <nav className="w-full bg-[#fefefe]/70 relative flex items-center justify-start md:justify-center top-0 md:top-16 z-[2]">
        <div className="block md:hidden px-2">
          <button onClick={() => (toggle ? close() : open())}>
            <AnimatedFlowerSVG classname="h-14 aspect-sqaure">
              <motion.path
                stroke="#2b2a29"
                fill="blue"
                strokeWidth="3"
                strokeLinecap="round"
                variants={{
                  closed: { d: "M 2 2.5 L 20 2.5" },
                  open: { d: "M 3 16.5 L 17 2.5" },
                }}
              />
              <motion.path
                stroke="green"
                fill="transparent"
                strokeWidth="3"
                strokeLinecap="round"
                d="M 2 9.423 L 20 9.423"
                variants={{
                  closed: { opacity: 1 },
                  open: { opacity: 0 },
                }}
                transition={{ duration: 0.1 }}
              />
              <motion.path
                stroke="#2b2a29"
                fill="blue"
                strokeWidth="3"
                strokeLinecap="round"
                variants={{
                  closed: { d: "M 2 16.346 L 20 16.346" },
                  open: { d: "M 3 2.5 L 17 16.346" },
                }}
              />
            </AnimatedFlowerSVG>
          </button>
        </div>
        {/* navbar for wide screens */}
        <div className="w-4/5 hidden md:flex justify-between items-center">
          {renderNavLinks}
        </div>
      </nav>
    </>
  );
};

export default NavbarMain;
