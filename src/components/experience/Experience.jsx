import React from "react";
import "./experience.css";
import Skills from "./Skills";

let experienceYears = new Date().getFullYear() - 2018;
// console.log(experienceYears);

const frontendSkills = [
  { name: "HTML", experience: experienceYears + "+ Years" },
  { name: "CSS", experience: experienceYears + "+ Years" },
  { name: "JavaScript", experience: experienceYears - 1 + "+ Years" },
  { name: "React", experience: experienceYears - 1 + "+ Years" },
  { name: "TypeScript", experience: experienceYears - 3 + "+ Years" },
  { name: "MUI", experience: experienceYears - 3 + "+ Years" },
];

const backendSkills = [
  { name: "C#", experience: experienceYears + "+ Years" },
  { name: "Java", experience: experienceYears + "+ Years" },
  { name: "SQL", experience: experienceYears + "+ Years" },
  { name: "MongoDB", experience: experienceYears - 2 + "+ Years" },
  { name: "Firebase", experience: experienceYears - 2 + "+ Years" },
  { name: "Python", experience: experienceYears - 3 + "+ Years" },
];

const Experience = () => {
  return (
    <section id="experience">
      <h4>What Skills I Have</h4>
      <h2>My Experience</h2>

      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            {frontendSkills.map((skills) => {
              return (
                <div key={skills.name}>
                  <Skills name={skills.name} experience={skills.experience} />
                </div>
              );
            })}
          </div>
        </div>
        <div className="experience_backend">
          <h3>Backend Development</h3>
          <div className="experience_content">
            {backendSkills.map((skills) => {
              return (
                <div key={skills.name}>
                  <Skills name={skills.name} experience={skills.experience} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
