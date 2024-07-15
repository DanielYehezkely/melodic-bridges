import React from "react";
import { useParams } from "react-router-dom";
import InstrumentCard from "../../components/InstrumentCard/InstrumentCard";
import InstrumentGallery from "../../components/InsrumentGallery/InstrumentGallery";
import useInstruments from "../../hooks/useInstruments";
import InstrumentsPlaylist from "../../components/InstrumentsPlaylist/InstrumentsPlaylist";
import "./InstrumentPage.css";
import { addSongToFavorites } from "../../services/firebase/usersService";

const InstrumentPage = () => {
  const { id } = useParams();
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
      <InstrumentsPlaylist
        playlist={instrument.playlist}
        addSongToFavorites={addSongToFavorites}
      />
      <InstrumentGallery instrument={instrument} />
    </div>
  );
};

export default InstrumentPage;
