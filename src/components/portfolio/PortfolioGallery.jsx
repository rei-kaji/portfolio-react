import React from "react";

const PortfolioGallery = (props) => {
  return (
    <div key={props.title}>
      <article className="portfolio_item">
        <div className="portfolio_item-image">
          <img src={props.image} alt="" />
        </div>
        <h3>{props.title}</h3>
        <div className="portfolio_item-cta">
          <a
            href={props.github}
            className="btn"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
          <a
            href={props.demo}
            className="btn btn-primary"
            target="_blank"
            rel="noreferrer"
          >
            Live Demo
          </a>
        </div>
      </article>
    </div>
  );
};

export default PortfolioGallery;
