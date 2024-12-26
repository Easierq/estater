import "./error.scss";

import React from "react";
import { Link, NavLink } from "react-router-dom";

const Error = () => {
  return (
    <>
      <div className="error-con">
        <h1 className="err-h1">
          4<span className="err-span">0</span>4
        </h1>
        <h3 className="err-h3">Page not be found</h3>
        <div className="btn-con">
          <Link as={NavLink} to="/">
            <button className="err-btn">Back to Homepage</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Error;
