import React from "react";
import "./Loader.css";

const Loader = () => {
  return (
    <div className="loader-overlay">
      <div className="loader-container" style={{ textAlign: "center" }}>
        <div className="spinner" />
        <p style={{ color: "white", fontSize: "1.25rem" }}>
          Loading ...
        </p>
      </div>
    </div>
  );
};

export default Loader;