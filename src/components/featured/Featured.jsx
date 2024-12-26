import "./featured.scss";

import React from "react";

import CardGrid from "../cardGrid/CardGrid";
import { featuredPortfolio } from "../../../data";
import CardSkeleton from "../cardSkeleton/CardSkeleton";

const Featured = () => {
  return (
    <div className="featured-container">
      <div className="featured">
        <h2>Featured properties</h2>
        <div className="container">
          {featuredPortfolio.map((item) => (
            <CardGrid item={item} key={item.id} />
          ))}
        </div>
        <CardSkeleton />
      </div>
    </div>
  );
};

export default Featured;
