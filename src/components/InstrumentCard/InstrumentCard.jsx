import React from "react";
import "./InstrumentCard.css";

const InstrumentCard = ({ instrument }) => {
  return (
    <div className="instrument-card">
      <img
        src={instrument.image}
        alt={instrument.name}
        className="instrument-image"
      />
      <div className="instrument-info">
        <h2 className="instrument-name">{instrument.name}</h2>
        <p className="instrument-description">{instrument.description}</p>
      </div>
    </div>
  );
};

export default InstrumentCard;
