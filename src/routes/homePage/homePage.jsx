import "./homePage.scss";

import Featured from "../../components/featured/Featured";
import Hero from "../../components/hero/Hero";

import React from "react";

const HomePage = () => {
  return (
    <div className="homepage">
      <Hero />
      <Featured />
    </div>
  );
};

export default HomePage;
