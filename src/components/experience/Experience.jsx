import React from "react";
import "./experience.css";
import Skills from "./Skills";

const frontendSkills = [
  { name: "HTML", experience: "Advanced" },
  { name: "CSS", experience: "Advanced" },
  { name: "JavaScript", experience: "Intermadiate" },
  { name: "TypeScript", experience: "Intermadiate" },
  { name: "React", experience: "Intermadiate" },
  { name: "MUI", experience: "Intermadiate" },
];

const backendSkills = [
  { name: "C#", experience: "Advanced" },
  { name: "Java", experience: "Advanced" },
  { name: "SQL", experience: "Advanced" },
  { name: "MongoDB", experience: "Intermadiate" },
  { name: "Python", experience: "Intermadiate" },
  { name: "Node.js", experience: "Intermadiate" },
];

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have.</h5>
      <h2>My Experience</h2>

      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            {frontendSkills.map((skills) => {
              return (
                <Skills
                  name={skills.name}
                  experience={skills.experience}
                ></Skills>
              );
            })}
          </div>
        </div>
        <div className="experience_backend">
          <h3>Backend Development</h3>
          <div className="experience_content">
            {backendSkills.map((skills) => {
              return (
                <Skills
                  name={skills.name}
                  experience={skills.experience}
                ></Skills>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
