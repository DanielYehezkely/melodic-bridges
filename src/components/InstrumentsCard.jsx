import React from 'react'
import "../styles/InstrumentsCard.css";

function InstrumentsCard(props) {
    const { image, name, description } = props;
  return (
    <>
      <div className="card-container">
        <img src={image} alt="user-photo" />
        <h2>Name</h2>
        <p>
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
          magni?
        </p>
        <div className="line"></div>
      </div>
    </>
  );
}

export default InstrumentsCard