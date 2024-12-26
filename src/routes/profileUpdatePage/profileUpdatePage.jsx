import "./profileUpdatePage.scss";

import React from "react";
import { Link } from "react-router-dom";

const ProfileUpdatePage = () => {
  return (
    <div className="pu-page">
      <div className="pu-container">
        <div className="wrapper">
          <div className="header">
            <h1>Update Profile</h1>
            <p>Make changes to your profile.</p>
          </div>
          <div className="img-con">
            <img src="/bg.jpg" alt="" />
            <button>Change</button>
          </div>
          <div className="forms">
            <label htmlFor="">Username</label>
            <input
              className="input-one"
              placeholder="Enter your email"
              type="text"
            />
            <label htmlFor="">Email</label>
            <input
              className="input-one"
              placeholder="Enter your email"
              type="text"
            />
            <label htmlFor="">Password</label>
            <input
              className="input-two"
              placeholder="**********"
              type="password"
            />
          </div>
          <button>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default ProfileUpdatePage;
