import "./about.scss";

import React from "react";

const name = "Paapi";

const About = () => {
  return (
    <>
      <div className="about-container">
        <div className="about-wrapper">
          <h2>Welcome to {name}</h2>
          <p className="about-p">
            At {name}, we are passionate about simplifying the real estate
            experience for our users. Our mission is to connect buyers, sellers,
            and renters with their ideal properties, empowering them to make
            informed decisions and find a place they can truly call home.
          </p>
          <p className="about-p">
            With our user-friendly platform, advanced search features, and
            expert guidance, we strive to make the process of buying, selling,
            or renting a property as seamless as possible. We believe that
            everyone deserves a smooth and enjoyable real estate journey, and
            we're here to make that a reality.
          </p>
          <p className="about-p">
            Our team is dedicated to providing exceptional service and support
            to our users. We work tirelessly to ensure that our website/app
            remains up-to-date with the latest listings, market trends, and
            innovative features. Whether you're a first-time homebuyer, an
            experienced investor, or a seller looking to showcase your property,
            we've got you covered.
          </p>
          <p className="about-p">
            Join us on this exciting real estate adventure and let us be your
            trusted companion. Explore our website/app, connect with
            knowledgeable agents, and unlock a world of opportunities. We're
            here to help you find your dream home and create unforgettable
            memories.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
