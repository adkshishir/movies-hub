import React, { useState } from "react";
import Rightnav from "./Rightnav";
import Leftnav from "./Leftnav";
import Topnav from "./Topnav";
const Navbar = () => {
  const [toggled, setToggled] = useState(false);
  const toggle = (value) => {
    setToggled(!toggled);
  };
  return (
    <header className="justify-between  bg-[#151515] sticky -top-12 z-[2] ">
      <div>
        <Topnav />
      </div>

      {/*  dark:bg-[#181818] */}
      <div className="   bg-white lg:flex w-full  justify-center  ">
        <div
          className="lg:hidden cursor-pointer border-2 m-2 p-2"
          onClick={toggle}
        >
          toggle
        </div>

        <div className="  border-b bg-white hidden  lg:flex w-full  justify-center  ">
          <Leftnav />
          <Rightnav />
          <hr />
        </div>
        {toggled && (
          <div className="  border-b bg-white lg:hidden w-full  justify-center  ">
            <Leftnav />
            <Rightnav />
            <hr />
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
