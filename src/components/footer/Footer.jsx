import React from "react";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer_logo">
        Rei Kajiwara
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
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
        <a href="https://linkedin.com/" target="_brank">
          <BsLinkedin />
        </a>
        <a href="https://github.com/" target="_brank">
          <BsGithub />
        </a>
        <a href="https://instagram.com/" target="_brank">
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
