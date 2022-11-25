import React from "react";

const PortfolioExplain = ({ title, github, demo, language, explain }) => {
  return (
    <div className="portfolio_explain">
      <h3>Links:</h3>
      <div className="portfolio_item-cta">
        <a href={github} className="btn" target="_blank" rel="noreferrer">
          Github
        </a>
        <a
          href={demo}
          className="btn btn-primary"
          target="_blank"
          rel="noreferrer"
        >
          Live Demo
        </a>
      </div>
      <h3>Language & Tool:</h3>
      <h4>
        {language.map((data) => {
          return <span key={data}>{data}, </span>;
        })}
      </h4>
      <h3>Explain:</h3>
      <p>{explain}</p>
    </div>
  );
};

export default PortfolioExplain;
