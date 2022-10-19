import React from "react";
import { Link } from "react-router-dom";

const PortfolioGallery = (props) => {
  return (
    <div>
      <article className="portfolio_item">
        <div className="portfolio_item-image">
          <img src={props.image} alt="" />
        </div>
        <h3>{props.title}</h3>
        <div className="link">
          <Link
            className="btn btn-link"
            to={"/portfolioDetail"}
            state={{ state: props }}
          >
            Detail
          </Link>
        </div>
      </article>
    </div>
  );
};

export default PortfolioGallery;
