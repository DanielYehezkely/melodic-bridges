import { useState, useEffect } from 'react';
import { getInstruments } from '../services/firebase/instrumentsService';

const useInstruments = () => {

  const [instruments, setInstruments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchInstruments = async () => {
      try {
        const instrumentsData = await getInstruments();
        setInstruments(instrumentsData);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchInstruments();
  }, []); 

  return { instruments, loading, error };
};

export default useInstruments;