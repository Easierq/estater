import React from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-wrap">
        <div className="icons">
          <a
            href="
        /properties"
          >
            <p>Properties</p>
          </a>
          <a href="/contact">
            <p>Contact</p>
          </a>
          <a href="/about">
            <p>About</p>
          </a>
        </div>
        <p className="big-screen">
          &copy; {new Date().getFullYear()} <span id="date"></span> GKIT. All
          rights reserved
        </p>
        <p className="small-screen">
          &copy; {new Date().getFullYear()} <span id="date"></span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
