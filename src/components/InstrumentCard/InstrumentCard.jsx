import React from "react";
import "./InstrumentCard.css";
import { useNavigate } from "react-router-dom";

const InstrumentCard = ({ instrument }) => {
  const navigate = useNavigate();
  const Back = () => {
    navigate("/app");
  };
  return (
    <div className="instrument-card-main-container">
      <div className="instrument-card">
        <div className="instrument-image-container">
          <img
            src={instrument.instrumentImage}
            alt={instrument.name}
            className="instrument-image"
          />
        </div>
        <div className="instrument-info">
          <h2 className="instrument-name">{instrument.name}</h2>
          <p className="instrument-description">{instrument.description}</p>
          <p className="instrument-details">
            <strong>Creator:</strong> {instrument.creator}
          </p>
          <p className="instrument-details">
            <strong>Year:</strong> {instrument.year}
          </p>
          <p className="instrument-details">
            <strong>Created At:</strong>{" "}
            {new Date(instrument.createdAt).toLocaleDateString()}
          </p>
          <button className="learn-more-button" onClick={Back}>
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default InstrumentCard;
