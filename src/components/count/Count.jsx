import React from "react";
import "./count.scss";
import camera from "../../icons/camera.svg";

const Count = () => {
  return (
    <div className="count">
      <img src={camera} alt="count" />
      <span>4</span>
    </div>
  );
};

export default Count;
