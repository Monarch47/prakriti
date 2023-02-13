import { AnimatePresence } from "framer-motion";
import type { NextPage } from "next";
import { useState } from "react";
import NavbarMain from "../components/Navbar/NavbarMain";

const Home: NextPage = () => {
  const [toggle, setToggle] = useState(false);
  const open = () => setToggle(true);
  const close = () => setToggle(false);
  return (
    <>
      <div className="flex flex-col justify-center items-center font-poppins overflow-x-hidden min-h-screen w-full">
        {/* banner image container */}
        <div className="w-full min-h-screen relative banner-hor bg-cover flex flex-col justify-between items-center pb-10">
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
