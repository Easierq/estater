import React from "react";
import "./count.scss";
import camera from "../../icons/camera.svg";

const Count = ({ images }) => {
  return (
    <div className="count">
      <img src={camera} alt="count" />
      <span>{images?.length}</span>
    </div>
  );
};

export default Count;
