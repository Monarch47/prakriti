import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import NavbarMain from "../components/Navbar/NavbarMain";
import { useRef, useState } from "react";

type Props = {};

const About = (props: Props) => {
  const [open, setOpen] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div className="flex flex-col justify-center items-center font-poppins overflow-x-hidden min-h-screen w-full relative">
      <NavbarMain />
    </div>
  );
};

export default About;
