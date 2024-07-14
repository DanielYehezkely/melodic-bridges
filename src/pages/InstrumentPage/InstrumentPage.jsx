import React from "react";
import { useParams } from "react-router-dom";
import InstrumentCard from "../../components/InstrumentCard/InstrumentCard";
import InstrumentGallery from "../../components/InsrumentGallery/InstrumentGallery";
import useInstruments from "../../hooks/useInstruments";
import "./InstrumentPage.css";

const InstrumentPage = () => {
  // const { id } = useParams();
  const id = "5IocFBTy4Zco4dC0d5tBOs";
  const { instruments, loading, error } = useInstruments();
  
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  const instrument = instruments.find((inst) => inst.id === id);

  if (!instrument) {
    return <div>Instrument not found</div>;
  }

  return (
    <div className="instrument-page">
      <InstrumentCard instrument={instrument} />
      <InstrumentGallery instrument={instrument} />
    </div>
  );
};

export default InstrumentPage;
