import React from "react";
import { BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs";
import { Link, animateScroll as scroll } from "react-scroll";
import { AiOutlineMail } from "react-icons/ai";

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
      {/* <a
        href="https://www.instagram.com/rei_kaji0/"
        target="_brank"
        rel="noreferrer"
      >
        <AiOutlineMail className="contact_option-icon" />
      </a> */}
      <Link
        to="contact"
        activeClass="active"
        spy={true}
        smooth={true}
        offset={-50}
        duration={100}
      >
        <AiOutlineMail />
      </Link>
    </div>
  );
};

export default HeaderSocial;
