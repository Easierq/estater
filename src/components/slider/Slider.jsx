import "./slider.scss";

import { useState } from "react";
import close from "../../icons/close.svg";
import left from "../../icons/chevron_left.svg";
import right from "../../icons/chevron_right.svg";
import Count from "../count/Count";

function Slider({ images }) {
  const [imageIndex, setImageIndex] = useState(null);

  if (imageIndex !== null) {
    document.body.classList.add("active-slider");
  } else {
    document.body.classList.remove("active-slider");
  }

  const changeSlide = (direction) => {
    if (direction === "left") {
      if (imageIndex === 0) {
        setImageIndex(images.length - 1);
      } else {
        setImageIndex(imageIndex - 1);
      }
    } else {
      if (imageIndex === images.length - 1) {
        setImageIndex(0);
      } else {
        setImageIndex(imageIndex + 1);
      }
    }
  };

  return (
    <div className="slider">
      {imageIndex !== null && (
        <div className="fullSlider">
          <div className="slider-container">
            <div className="arrow-one" onClick={() => changeSlide("left")}>
              <img src={left} alt="" />
            </div>
            <div className="imgContainer">
              <img src={images[imageIndex]} alt="" />
            </div>
            <div className="arrow-two" onClick={() => changeSlide("right")}>
              <img src={right} className="right" alt="" />
            </div>
            <div className="close-wrap">
              <img
                className="close"
                src={close}
                alt="menu-icon"
                onClick={() => setImageIndex(null)}
              />
            </div>
          </div>
        </div>
      )}
      <div className="bigImage">
        <Count images={images} />
        <img src={images[0]} alt="" onClick={() => setImageIndex(0)} />
      </div>
      <div className="smallImages">
        {images.slice(1).map((image, index) => (
          <img
            src={image}
            alt=""
            key={index}
            onClick={() => setImageIndex(index + 1)}
          />
        ))}
      </div>
    </div>
  );
}

export default Slider;
