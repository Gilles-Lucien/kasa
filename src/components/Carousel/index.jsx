import React, { useState } from "react";
import "./Carrousel.css";

function Carousel({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleImageClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % pictures.length);
  };

  return (
    <div className="carrousel">
      {pictures.map((imageUrl, index) => (
        // eslint-disable-next-line jsx-a11y/img-redundant-alt
        <img
          key={index}
          src={imageUrl}
          alt={`photo ${index + 1}`}
          onClick={handleImageClick}
          style={{ display: index === currentIndex ? "flex" : "none" }}
        />
      ))}
    </div>
  );
}

export default Carousel;
