import "./hero.scss";
import SearchBar from "../searchBar/SearchBar";

import React from "react";

const Hero = () => {
  return (
    <div className="hero-wrapper">
      <div className="hero">
        <div className="hero-container">
          <div className="textContainer">
            <div className="wrapper">
              <h1 className="title">Find Real Estate & Get Your Dream Place</h1>
              <p className="subtitle">
                Find Real Estate & Get Your Dream Place
              </p>
              <SearchBar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
