import { FaSearch } from "react-icons/fa";
import React, { useState } from "react";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BsImages } from "react-icons/bs";
import { IoMdMenu } from "react-icons/io";
import "./Navbar.css"; 

export const Navbar = () => {
  const [activeNav, setActiveNav] = useState("#home");
   
  return (
    <div className="NavbarContainer">
      <div className="Logo">Images gallery</div>
      <div className="MenuIcon">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="NavLinks">
        <a
          href="#home"
          onClick={() => setActiveNav("#home")}
          className={activeNav === "#home" ? "active" : ""}
        >
          <AiOutlineHome />
        </a>
        <a
          href="#search"
          onClick={() => setActiveNav("#search")}
          className={activeNav === "#search" ? "active" : ""}
        >
          <FaSearch />
        </a>
        <a
          href="#gallery"
          onClick={() => setActiveNav("#portfolio")}
          className={activeNav === "#portfolio" ? "active" : ""}
        >
          <BsImages />
        </a>
        <a
          href="#login"
          onClick={() => setActiveNav("#login")}
          className={activeNav === "#login" ? "active" : ""}
        >
          <AiOutlineUser />
        </a>
        <a
          href="#menu"
          onClick={() => setActiveNav("#menu")}
          className={activeNav === "#menu" ? "active" : ""}
        >
          <IoMdMenu />
        </a>
      </div>
    </div>
  );
};
