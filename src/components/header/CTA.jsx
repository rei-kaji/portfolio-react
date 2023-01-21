import React from "react";
import CV from "../../assets/Rei_Resume.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn btn-primary">
        Download Resume
      </a>
    </div>
  );
};

export default CTA;
