import React from "react";
import InstrumentsCard from "../../components/InstrumentsCard";
import Slideshow from "../../components/Slideshow";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getInstruments } from "../../services/firebase/instrumentsService";
import "./InstrumentsPage.css";

const InstrumentsPage = () => {
  const [instruments, setInstruments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchInstruments = async () => {
      try {
        const instrumentsData = await getInstruments();
        setInstruments(instrumentsData || []);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchInstruments();
  }, []);

  const handleInstrumentClicked = (instrument) => {
    navigate(`/app/${instrument.id}`);
  };
  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <>
      <div className="slide">
        <Slideshow />
      </div>
      <div className="cards-container">
        <div>
          {instruments.map((item, index) => (
            <div className="cardsDiv" key={index} onClick={() => handleInstrumentClicked(item)}>
              <InstrumentsCard
                name={item.name}
                image={item.instrumentImage}
                description={item.createdAt}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default InstrumentsPage;
