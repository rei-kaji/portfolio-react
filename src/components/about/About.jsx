import React from "react";
import "./about.css";
import Me from "../../assets/montreal.jpg";
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
              <article className="cards about_card">
                <div className="hoverCard">
                  <FaAward className="about_icon" />
                  <h3>Experience</h3>
                  <small>{experienceYears}+ Years Working</small>
                </div>
              </article>

              <article className="cards about_card">
                <div className="hoverCard">
                  <FiUsers className="about_icon" />
                  <h3>Clients</h3>
                  <small>10+ Worldwide</small>
                </div>
              </article>

              <article className="cards about_card">
                <div className="hoverCard">
                  <FiFolder className="about_icon" />
                  <h3>Projects</h3>
                  <small>25+ Completed</small>
                </div>
              </article>

              <article className="cards about_card">
                <div className="hoverCard">
                  <FaSchool className="about_icon" />
                  <h3>Educational</h3>
                  <small>Web development Diploma</small>
                </div>
              </article>
            </div>
          </div>
        </div>

        <div className="about_explain">
          {/* <p>
            Fullstack developer specialized in React, C#, Java and SQL
            development. <br />I have {experienceYears}+ years of experience
            developing complex applications and manage projects. <br />
            I’m looking to work with small or large teams in agile startup
            environments.
          </p> */}
          {/* <p>
            As a highly skilled full-stack developer with expertise in React,
            C#, Java, and SQL, I bring {experienceYears}+ years of experience
            developing sophisticated applications and managing successful
            projects. I excel in an agile startup environment and am eager to
            join a dynamic team, whether small or large, to continue delivering
            exceptional results. I have a diverse skill set that allows me to
            tackle a range of projects with confidence and creativity. I am
            eager to bring my experience and passion for web development to your
            organization.
          </p> */}
          <p>
            Full-stack developer with {experienceYears}+ years of experience in
            React, C#, Java, and SQL. <br />
            Adept at developing complex applications and managing projects.
            Passionate about web development and seeking opportunities in agile
            startup environments to continue delivering exceptional results.
          </p>
        </div>
        <div className="about_btn">
          <Link className="btn btn-primary" to={"/myfavorite"}>
            My Favorite Photo Albums
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
