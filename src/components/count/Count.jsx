import React from "react";
import "./count.scss";
import left from "../../icons/chevron_left.svg";

const Count = () => {
  return (
    <div className="count">
      <img src={left} alt="count" />
      <span>4</span>
    </div>
  );
};

export default Count;
