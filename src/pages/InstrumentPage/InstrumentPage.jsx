import React from "react";
import { useParams } from "react-router-dom";
import { useAuth } from '../../context/useAuthContext'
import InstrumentCard from "../../components/InstrumentCard/InstrumentCard";
import InstrumentGallery from "../../components/InsrumentGallery/InstrumentGallery";
import useInstruments from "../../hooks/useInstruments";
import InstrumentsPlaylist from "../../components/InstrumentsPlaylist/InstrumentsPlaylist";
import "./InstrumentPage.css";
import { addSongToFavorites } from "../../services/firebase/usersService";

const InstrumentPage = () => {
  const { id } = useParams();
  const { instruments, loading, error } = useInstruments();
  const { user } = useAuth()

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
      <InstrumentsPlaylist
        playlist={instrument.playlist}
        addSongToFavorites={addSongToFavorites}
        userId={user.id} // Replace with actual user ID
      />
    </div>
  );
};

export default InstrumentPage;
