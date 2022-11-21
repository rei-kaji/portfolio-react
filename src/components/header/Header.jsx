import React from "react";
import CTA from "./CTA";
import "./header.css";
import ME from "../../assets/me.png";
import HeaderSocial from "./HeaderSocial";

const Header = () => {
  return (
    <header id="home" className="container header_container">
      <h2>Hello, I'm</h2>
      <h1 className="header_name">Rei Kajiwara</h1>
      <h2 className="job_name">Fullstack Developer</h2>
      <CTA />
      <HeaderSocial />

      {/* <div className="me">
        <img src={ME} alt="me" />
      </div> */}
      <a href="#contact" className="scroll_down">
        Scroll Down
      </a>
    </header>
  );
};

export default Header;
