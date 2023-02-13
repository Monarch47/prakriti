import Image from "next/image";
import React from "react";

type Props = {
  className?: string;
};

const Navbar = (props: Props) => {
  return (
    <div className={`${props.className} `}>
      <div className="flex justify-evenly w-1/2 relative -left-[5.5rem]">
        <h2 className="text-[#009641]">Home</h2>
        <h2>About</h2>
      </div>
      <div className="">
        <Image
          height={500}
          width={500}
          src={"/assets/images/project_prakriti_logo_black.svg"}
          alt="Project Prakriti Logo"
          className="absolute left-[38%] -top-[5rem]"
        />
      </div>
      <div className="flex justify-evenly w-1/2 relative left-28">
        <h2>Services</h2>
        <h2>Contact</h2>
      </div>
    </div>
  );
};

export default Navbar;
