import React from "react";
import { Link } from "react-router-dom";

const PortfolioGallery = (props) => {
  return (
    <div>
      <Link
        // className="btn btn-primary btn-link"
        to={"/portfolioDetail"}
        state={{ state: props }}
      >
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={props.image} alt="" />
          </div>
          <h3>{props.title}</h3>
          <div className="link"></div>
        </article>
      </Link>
    </div>
  );
};

export default PortfolioGallery;
