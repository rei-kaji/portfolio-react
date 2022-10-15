import React, { useState } from "react";
import "./navbar.css";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BsChatText } from "react-icons/bs";
import { MdOutlineHomeWork } from "react-icons/md";
import { GiFeather } from "react-icons/gi";

const Navbar = () => {
  const [activeNav, setActiveNav] = useState("home");
  return (
    <nav>
      <a
        href="#home"
        onClick={() => setActiveNav("home")}
        className={activeNav === "home" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("about")}
        className={activeNav === "about" ? "active" : ""}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#portfolio"
        onClick={() => setActiveNav("portfolio")}
        className={activeNav === "portfolio" ? "active" : ""}
      >
        <GiFeather />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav("experience")}
        className={activeNav === "experience" ? "active" : ""}
      >
        <MdOutlineHomeWork />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("contact")}
        className={activeNav === "contact" ? "active" : ""}
      >
        <BsChatText />
      </a>
    </nav>
  );
};

export default Navbar;
