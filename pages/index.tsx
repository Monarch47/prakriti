import { AnimatePresence, motion } from "framer-motion";
import type { NextPage } from "next";
import { useState, useRef } from "react";
import NavbarMain from "../components/Navbar/NavbarMain";

type Props = {};

const Home: NextPage = ({}: Props) => {
  const [toggle, setToggle] = useState(false);
  const open = () => setToggle(true);
  const close = () => setToggle(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <>
      <div className="flex flex-col justify-center items-center font-poppins overflow-x-hidden min-h-screen w-full relative">
        {/* banner image container */}
        <div className="w-full min-h-screen relative banner-hor bg-cover flex flex-col justify-between items-center pb-10">
          {/* <div className="h-full w-full absolute top-0 left-0 bg-pink-200 z-[2]"></div> */}
          <AnimatePresence mode="wait" initial={false}>
            <NavbarMain open={open} close={close} toggle={toggle} />
          </AnimatePresence>
          <div className="w-4/5 bg-red-200 ">h</div>
        </div>
        <div className="w-4/5 bg-dark-green flex justify-center items-center">
          boke
        </div>
      </div>
    </>
  );
};

export default Home;
