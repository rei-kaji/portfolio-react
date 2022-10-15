import React from "react";
import "./about.css";
import Me from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers, FiFolder } from "react-icons/fi";

const About = () => {
  let experienceYears = new Date().getFullYear() - 2018;
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={Me} alt="About Image" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h3>Experience</h3>
              <small>{experienceYears}+ Years Working</small>
            </article>
            <article className="about_card">
              <FiUsers className="about_icon" />
              <h3>Clients</h3>
              <small>10+ Worldwide</small>
            </article>
            <article className="about_card">
              <FiFolder className="about_icon" />
              <h3>Projects</h3>
              <small>50+ Completed</small>
            </article>
          </div>
          <p>
            Software developer specialized in C#, Java, JavaScript and SQL
            development. <br />I have {experienceYears}+ years of experience
            developing complex applications and had the opportunity to manage
            projects. I’m looking to work with small or large teams in agile
            startup environments.
          </p>
          <div className="about_btn">
            <a href="#contact" className="btn btn-primary">
              Let's Talk
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
