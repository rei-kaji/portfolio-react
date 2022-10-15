import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";

const Skills = (props) => {
  return (
    <>
      <article className="experience_details">
        <BsPatchCheckFill className="experience_details-icon" />
        <div>
          <h4>{props.name}</h4>
          <small className="text-light">{props.experience}</small>
        </div>
      </article>
    </>
  );
};

export default Skills;
