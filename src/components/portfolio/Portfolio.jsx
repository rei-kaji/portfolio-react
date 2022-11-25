import React from "react";
import FeaturePortfolio from "./FeaturePortfolio";
import "./portfolio.css";
import PortfolioGallery from "./PortfolioGallery";
import { PortfolioGroup, FeaturePortfolios } from "./PortfolioGroup";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h4>My Recent Work</h4>
      <h2>Portfolio</h2>
      <div className="container featurPortfolio_container">
        {FeaturePortfolios.map((data) => {
          return (
            <div key={data.title}>
              <FeaturePortfolio
                id={data.id}
                title={data.title}
                image={data.image}
                github={data.github}
                demo={data.demo}
                language={data.language}
                explain={data.explain}
              />
            </div>
          );
        })}
      </div>

      <div className="container portfolio_container">
        {PortfolioGroup.map((data) => {
          return (
            <div key={data.title}>
              <PortfolioGallery
                title={data.title}
                image={data.image}
                github={data.github}
                demo={data.demo}
                language={data.language}
                explain={data.explain}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
