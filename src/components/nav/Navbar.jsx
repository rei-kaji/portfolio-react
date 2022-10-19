import React, { useState } from "react";
import "./navbar.css";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BsChatText } from "react-icons/bs";
import { MdOutlineHomeWork } from "react-icons/md";
import { GiFeather } from "react-icons/gi";
import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  const [activeNav, setActiveNav] = useState("home");
  return (
    <nav>
      <Link
        to="home"
        activeClass="active"
        spy={true}
        smooth={true}
        offset={-50}
        duration={100}
        //onClick={() => setActiveNav("active")}
        //className={activeNav === "active" ? "active linkbtn" : "linkbtn"}
      >
        <AiOutlineHome />
      </Link>
      <Link
        to="about"
        activeClass="active"
        spy={true}
        smooth={true}
        offset={-10}
        duration={100}
        //onClick={() => setActiveNav("active")}
        //className={activeNav === "active" ? "active linkbtn" : "linkbtn"}
      >
        <AiOutlineUser />
      </Link>
      <Link
        to="portfolio"
        activeClass="active"
        spy={true}
        smooth={true}
        offset={-10}
        duration={100}
        //onClick={() => setActiveNav("active")}
        //className={activeNav === "active" ? "active linkbtn" : "linkbtn"}
      >
        <GiFeather />
      </Link>
      <Link
        to="experience"
        activeClass="active"
        spy={true}
        smooth={true}
        offset={-30}
        duration={100}
        //onClick={() => setActiveNav("active")}
        //className={activeNav === "active" ? "active linkbtn" : "linkbtn"}
      >
        <MdOutlineHomeWork />
      </Link>
      <Link
        to="contact"
        activeClass="active"
        spy={true}
        smooth={true}
        offset={-50}
        duration={100}
        //onClick={() => setActiveNav("active")}
        //className={activeNav === "active" ? "active linkbtn" : "linkbtn"}
      >
        <BsChatText />
      </Link>
    </nav>
  );
};

export default Navbar;
