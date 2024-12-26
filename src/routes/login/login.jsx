import "./login.scss";

import { Link, NavLink } from "react-router-dom";

import React from "react";

const Login = () => {
  return (
    <div className="login">
      <div className="login-container">
        <div className="wrapper">
          <div className="header">
            <h1>Login</h1>
            <p>Enter your email below to login to your account</p>
          </div>
          <div className="forms">
            <label htmlFor="">Email</label>
            <input
              className="input-one"
              placeholder="Enter your email"
              type="text"
            />
            {/* <Link to="/">
              <p>Forgot password?</p>
            </Link> */}
            <label htmlFor="">Password</label>
            <input
              className="input-two"
              placeholder="**********"
              type="password"
            />
          </div>
          <button>Submit</button>
          {/* <Link to="/">
            <p>Forgot password?</p>
          </Link> */}
          <p className="no-account">
            Don &apos;t have an account?{" "}
            <Link as={NavLink} to="/register">
              Register.
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
