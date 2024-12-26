import React from "react";
import "./propSkeleton.scss";

const PropSkeleton = () => {
  return (
    <div className="wrapperr">
      <div className="title"></div>
      <div className="main">
        <div className="left">
          <div className="pics">
            <div className="big-pic"></div>
            <div className="small-pics">
              <div className="small-pic"></div>
              <div className="small-pic"></div>
              <div className="small-pic"></div>
            </div>
          </div>
          <div className="title"></div>
          <div className="location"></div>
          <div className="price"></div>
          <div className="desc"></div>
        </div>
        <div className="right">
          <div className="ftitle"></div>
          <div className="ff"></div>
          <div className="desc"></div>
          <div className="street"></div>
          <div className="desc"></div>
        </div>
      </div>
    </div>
  );
};

export default PropSkeleton;
