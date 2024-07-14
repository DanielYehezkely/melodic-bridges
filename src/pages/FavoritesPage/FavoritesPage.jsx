import { useEffect, useState } from "react";
import { PlayList } from "../../components/index";
import { useAuth } from "../../context/useAuthContext";
import {
  getUserData,
  updateUserData,
} from "../../services/firebase/usersService";
import "./FavoritesPage.css";

const FavoritesPage = () => {
  const { user } = useAuth();
  const [favoriteSongs, setFavoriteSongs] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        if (user) {
          const res = await getUserData(user.uid);
          setFavoriteSongs(res.favoriteSongs);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchUserData();
  }, [user]);

  const handleRemove = async (id) => {
    try {
      const filteredFavoriteSongs = favoriteSongs.filter(
        (song) => song.id !== id
      );
      await updateUserData(user.uid, filteredFavoriteSongs);
      setFavoriteSongs(filteredFavoriteSongs);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <PlayList
      songs={favoriteSongs}
      onRemove={handleRemove}
      isFavoritePage={true}
    />
  );
};

export default FavoritesPage;
