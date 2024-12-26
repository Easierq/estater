import React from "react";
import "./cardSkeleton.scss";

const CardSkeleton = () => {
  const CaSkeleton = () => (
    <div className="cardsk">
      <div className="cardsk-img"></div>
      <div className="cardsk-body">
        <div className="cardsk-price"></div>
        <div className="cardsk-loc">
          {/* <div className="cardsk-l-icon"></div> */}
          <div className="cardsk-l-text"></div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="skeleton-con">
      <CaSkeleton />
      <CaSkeleton />
      <CaSkeleton />
      <CaSkeleton />
      <CaSkeleton />
      <CaSkeleton />
      <CaSkeleton />
      <CaSkeleton />
    </div>
  );
};

export default CardSkeleton;
