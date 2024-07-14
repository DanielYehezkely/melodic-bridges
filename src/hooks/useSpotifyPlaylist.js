import { useState, useEffect } from 'react';
import { fetchPlaylist } from './spotifyService';

const useSpotifyPlaylist = (playlistId) => {
  const [playlist, setPlaylist] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getPlaylist = async () => {
      try {
        const data = await fetchPlaylist(playlistId);
        setPlaylist(data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    if (playlistId) {
      getPlaylist();
    }
  }, [playlistId]);

  return { playlist, loading, error };
};

export default useSpotifyPlaylist;