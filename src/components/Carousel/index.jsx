import React, { useState } from "react";

function Carousel({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = pictures;
  console.log("images", images);

  const handleImageClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="carousel">
      {pictures.map((imageUrl, index) => (
        // eslint-disable-next-line jsx-a11y/img-redundant-alt
        <img
          key={index}
          src={imageUrl}
          alt={`photo ${index + 1}`}
          onClick={handleImageClick}
          style={{ display: index === currentIndex ? "block" : "none" }}
        />
      ))}
    </div>
  );
}

export default Carousel;
