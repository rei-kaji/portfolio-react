import React from "react";
import { Link, useLocation } from "react-router-dom";
import returnButton from "../../assets/return1.svg";

// const returnButton = require("../../assets/return.svg");

const PortfolioDetail = () => {
  const location = useLocation();
  const portfolioInfo = location.state.state;
  return (
    <section id="portfolioDetail">
      <div className="container">
        <Link className="returnButton" to={"/"} state={{ state: "return" }}>
          <img src={returnButton} alt="" />
        </Link>
        <h2>{portfolioInfo.title}</h2>
        <div className="portfolioDetail_container">
          <div className="portfolioExplain">
            <h3>Links:</h3>
            <div className="portfolio_item-cta">
              <a
                href={portfolioInfo.github}
                className="btn"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
              <a
                href={portfolioInfo.demo}
                className="btn btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
            <h3>Language & Tool:</h3>
            <h4>
              {portfolioInfo.language.map((data) => {
                return <span key={data}>{data}, </span>;
              })}
            </h4>
            <h3>Explain:</h3>
            <p>{portfolioInfo.explain}</p>
          </div>
          <div className="portfolioDetail_iframe">
            <img src={portfolioInfo.image} alt={portfolioInfo.title} />
            {/* <iframe
              title={portfolioInfo.title}
              src={portfolioInfo.demo}
            ></iframe> */}
          </div>
        </div>

        <div className="go_home">
          <Link
            className="btn btn-primary btn-link"
            to={"/"}
            state={{ state: "return" }}
          >
            Home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PortfolioDetail;
