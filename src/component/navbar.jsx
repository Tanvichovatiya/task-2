import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { MdOutlineHome } from "react-icons/md";
import { CiFacebook, CiLinkedin, CiTwitter, CiYoutube } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";

import logo from "../assets/img/logo.jpeg";

const Navbar = () => {
  return (
    <nav className="bg-green-800 p-4">
      <div className="container mx-auto flex gap-6 items-center">
        <div className="text-white  flex ">
          <MdOutlineHome className="text-2xl" />
          <p className="text-[20px]">home</p>
        </div>
        <div className="text-white text-[20px] ">
          <p>Coding Groud</p>
        </div>
        <div className="text-white text-[20px]">
          <p>Jobs</p>
        </div>
        <div className="text-white text-[20px]">
          <p>whitebord</p>
        </div>
        <div className="text-white text-[20px]">
          <p>Tools</p>
        </div>
        <div className="text-white text-[20px]">
          <p>Article</p>
        </div>
        <div className="text-white text-[20px]">
          <p>write&earn</p>
        </div>
        <div className="text-[20px] text-white">
          <p>Shorts</p>
        </div>
        <div className="flex gap-4 items-center ml-[10%]">
          <CiFacebook className="text-[30px]  " />
          <CiInstagram className="text-[30px]  " />
          <CiTwitter className="text-[30px]  " />
          <CiYoutube className="text-[30px]  " />
          <CiLinkedin className="text-[30px] " />
        </div>
      </div>
    </nav>


  );
};

export default Navbar;
