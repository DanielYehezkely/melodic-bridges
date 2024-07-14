import { useEffect, useState } from "react";

const FavoritesPage = () => {
  const [playList, setPlayList] = useState();
  const [favoriteSongs, setFavoriteSongs] = useState();
  const [filteredSongs, setFilteredSongs] = useState();

  useEffects(() => {
    const fetchUserData = async () => {
      try {
        const playListRes = await // fetch playlist
        setPlayList(playListRes.data);
        const res = await // get user
        setFavoriteSongs(res.favorites);
      } catch (error) {}
    };
    fetchUserData();
  }, []);

  useEffect(() => {
    setFilteredSongs(favoriteSongs.filter((favSong) => favSong.id === song.id));
  }, []);

  return <div>FavoritesPage</div>;
};

export default FavoritesPage;

// userData.favorite
// allSongsPlaylist
