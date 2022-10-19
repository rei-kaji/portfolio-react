import React from "react";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer_logo">
        Rei Kajiwara
      </a>

      <ul className="permalinks">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer_socials">
        <a
          href="https://www.linkedin.com/in/reikaji"
          target="_brank"
          rel="noreferrer"
        >
          <BsLinkedin />
        </a>
        <a href="https://github.com/rei-kaji" target="_brank" rel="noreferrer">
          <BsGithub />
        </a>
        <a
          href="https://www.instagram.com/rei_kaji0/"
          target="_brank"
          rel="noreferrer"
        >
          <BsInstagram />
        </a>
      </div>

      <div className="footer_copyright">
        <small>&copy; Rei Kajiwara. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
