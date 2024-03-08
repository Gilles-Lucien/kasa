import React, { useState } from "react";
import "./Carrousel.css";
import leftArrow from "../../assets/leftArrow.svg";
import rightArrow from "../../assets/rightArrow.svg";

function Carousel({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleArrowClickLeft = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
    );
  };

  const handleArrowClickRight = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % pictures.length);
  };

  return (
    <div className="carrousel">
      {pictures.length > 1 && (
        <>
          <img
            src={leftArrow}
            alt="left arrow"
            className="carrousel__arrow carrousel__arrow--left"
            onClick={handleArrowClickLeft}
          />
          <img
            src={rightArrow}
            alt="right arrow"
            className="carrousel__arrow carrousel__arrow--right"
            onClick={handleArrowClickRight}
          />

          <p>
            {currentIndex + 1}/{pictures.length}
          </p>
        </>
      )}

      {pictures.map((imageUrl, index) => (
        // eslint-disable-next-line jsx-a11y/img-redundant-alt
        <img
          key={index}
          src={imageUrl}
          alt={imageUrl}
          className="carrousel__image"
          style={{ display: index === currentIndex ? "flex" : "none" }}
        />
      ))}
    </div>
  );
}

export default Carousel;
