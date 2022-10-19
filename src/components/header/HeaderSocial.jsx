import React from "react";
import { BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs";

const HeaderSocial = () => {
  return (
    <div className="header_socials">
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
  );
};

export default HeaderSocial;
