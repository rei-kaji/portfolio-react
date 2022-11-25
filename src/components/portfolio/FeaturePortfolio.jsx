import React from "react";
import PortfolioExplain from "./PortfolioExplain";

const FeaturePortfolio = ({
  id,
  title,
  image,
  github,
  demo,
  language,
  explain,
}) => {
  let positonBoolean = id % 2 === 0;

  return (
    <section id="featurePortfolio">
      <div className={positonBoolean ? "even" : "uneven"}>
        <div className="left">
          <PortfolioExplain
            github={github}
            image={image}
            demo={demo}
            language={language}
            explain={explain}
          />
        </div>
        <div className="right">
          <h2>{title}</h2>
          <img src={image} alt={title} />
        </div>
      </div>
      {/* {positonBoolean ? (
        <>
          <div className="left">
            <PortfolioExplain
              github={github}
              image={image}
              demo={demo}
              language={language}
              explain={explain}
            />
          </div>
          <div className="right">
            <h2>{title}</h2>
            <img src={image} alt={title} />
          </div>
        </>
      ) : (
        <>
          <div className="left">
            <h2>{title}</h2>
            <img src={image} alt={title} />
          </div>
          <div className="right">
            <PortfolioExplain
              github={github}
              image={image}
              demo={demo}
              language={language}
              explain={explain}
            />
          </div>
        </>
      )} */}
    </section>
  );
};

export default FeaturePortfolio;
