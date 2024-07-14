import React from "react";
import "../styles/InstrumentsCard.css";

function InstrumentsCard(props) {
  const { image, name, description } = props;
  return (
    <>
      <div className="card-container">
        <img src={image} alt="user-photo" />
        <h2>{name}</h2>
        <p>{description}</p>
        <div className="line"></div>
      </div>
    </>
  );
}

export default InstrumentsCard;
