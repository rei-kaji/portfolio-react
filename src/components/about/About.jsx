import React from "react";
import "./about.css";
import Me from "../../assets/me-about.jpg";
import { FaAward, FaSchool } from "react-icons/fa";
import { FiUsers, FiFolder } from "react-icons/fi";
import { Link } from "react-router-dom";

const About = () => {
  let experienceYears = new Date().getFullYear() - 2018;
  return (
    <section id="about">
      <h4>Get to know</h4>
      <h2>About me</h2>
      <div className="container about_container">
        <div className="about_container_bord">
          <div className="about_me">
            <div className="about_me-image">
              <img src={Me} alt="About" />
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
                <small>25+ Completed</small>
              </article>
              <article className="about_card">
                <FaSchool className="about_icon" />
                <h3>Educational</h3>
                <small>Web development Diploma</small>
              </article>
            </div>
          </div>
        </div>

        <div className="about_explain">
          <p>
            Software developer specialized in C#, Java, React and SQL
            development. <br />I have {experienceYears}+ years of experience
            developing complex applications and manage projects. <br />
            I’m looking to work with small or large teams in agile startup
            environments.
          </p>
        </div>
        <div className="about_btn">
          <Link className="btn btn-primary" to={"/myfavorite"}>
            My Favorites
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
