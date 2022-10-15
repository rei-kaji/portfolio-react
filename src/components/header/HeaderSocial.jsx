import React from "react";
import { BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs";

const HeaderSocial = () => {
  return (
    <div className="header_socials">
      <a href="https://linkedin.com/" target="_brank" rel="noreferrer">
        <BsLinkedin />
      </a>
      <a href="https://github.com/" target="_brank" rel="noreferrer">
        <BsGithub />
      </a>
      <a href="https://instagram.com/" target="_brank" rel="noreferrer">
        <BsInstagram />
      </a>
    </div>
  );
};

export default HeaderSocial;
