import { db } from '../../config/firebaseConfig';
import { updateDoc, doc, getDoc } from "firebase/firestore";

export const getUserData = async (userId) => {
    try {
        const docRef = doc(db, "users", userId);
        const docSnap = await getDoc(docRef);
        return docSnap.data();
    } catch (error) {
        throw new Error("Failed to fetch tasks");
    }
};

export const updateUserData = async (userId, favoriteSongs) => {
    try {
        const docRef = doc(db, "users", userId);
        await updateDoc(docRef, {
            favoriteSongs: favoriteSongs,
        });
        return "update successful";
    } catch (error) {
        throw new Error("Failed to update recipes");
    }
};

export const addSongToFavorites = async (userId, songId, songTitle) => {
    try {
        const userData = await getUserData(userId);
        const favoriteSongs = userData.favoriteSongs || [];
        const newSong = { id: songId, title: songTitle };
        favoriteSongs.push(newSong);
        await updateUserData(userId, favoriteSongs);
        return "Song added to favorites";
    } catch (error) {
        throw new Error("Failed to add song to favorites");
    }
};