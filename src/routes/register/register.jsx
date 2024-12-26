import "./register.scss";

import { Link, NavLink } from "react-router-dom";

import React from "react";

const Register = () => {
  return (
    <div className="register-page">
      <div className="register-container">
        <div className="wrapper">
          <div className="header">
            <h1>Register</h1>
            <p>Enter your details to register</p>
          </div>
          <div className="forms">
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
          <p className="no-account">
            Already registered?{" "}
            <Link as={NavLink} to="/login">
              Login.
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
