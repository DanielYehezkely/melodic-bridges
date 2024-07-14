import React, { useState } from "react";
import "./InstrumentGallery.css";

const InstrumentGallery = ({ instrument }) => {
  const imagesArray = Object.values(instrument.images || {});
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? imagesArray.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === imagesArray.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="instrument-gallery-container">
      <button
        className="instrument-gallery-button instrument-gallery-prev-button"
        onClick={handlePrevClick}
      >
        &#8249;
      </button>
      <div className="instrument-gallery-carousel">
        {imagesArray.map((image, index) => (
          <div
            key={index}
            className={`instrument-gallery-carousel-image ${
              index === currentIndex ? "instrument-gallery-active" : ""
            }`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
      </div>
      <button
        className="instrument-gallery-button instrument-gallery-next-button"
        onClick={handleNextClick}
      >
        &#8250;
      </button>
    </div>
  );
};

export default InstrumentGallery;
