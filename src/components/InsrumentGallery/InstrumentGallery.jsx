import React from "react";
import "./InstrumentGallery.css";

const InstrumentGallery = ({ images }) => {
  return (
    <div className="instrument-gallery">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Instrument ${index}`}
          className="gallery-image"
        />
      ))}
    </div>
  );
};

export default InstrumentGallery;
