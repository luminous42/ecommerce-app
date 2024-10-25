import React from "react";
import { assets } from "../assets/assets";

const Navbar = () => {
  return (
    <div className="flex item-center justify-between py-5 font-medium">
      <img src={assets.logo} className="w-36" alt="" />
      <ul>
        <li>test</li>
      </ul>
    </div>
  );
};

export default Navbar;
