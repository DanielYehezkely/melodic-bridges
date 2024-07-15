import { db } from '../../config/firebaseConfig';
import { updateDoc, doc, getDoc } from "firebase/firestore";

export const getUserData = async (userId) => {
    try {
        if (!userId) {
            throw new Error("User ID is undefined");
        }
        const docRef = doc(db, "users", userId);
        const docSnap = await getDoc(docRef);
        if (!docSnap.exists()) {
            throw new Error("User data does not exist");
        }
        return docSnap.data();
    } catch (error) {
        throw new Error("Failed to fetch user data");
    }
};

export const updateUserData = async (userId, favoriteSongs) => {
    try {
        if (!userId) {
            throw new Error("User ID is undefined");
        }
        const docRef = doc(db, "users", userId);
        await updateDoc(docRef, { favoriteSongs: favoriteSongs });
        return "Update successful";
    } catch (error) {
        throw new Error("Failed to update user data");
    }
};

export const addSongToFavorites = async (userId, songId, songTitle) => {
    try {
        if (!userId) {
            throw new Error("User ID is undefined");
        }
        const userData = await getUserData(userId);
        if (!userData) {
            throw new Error("User data not found");
        }
        const favoriteSongs = userData.favoriteSongs || [];
        const newSong = { id: songId, title: songTitle };
        favoriteSongs.push(newSong);
        const result = await updateUserData(userId, favoriteSongs);
        return result;
    } catch (error) {
        throw new Error("Failed to add song to favorites");
    }
};
