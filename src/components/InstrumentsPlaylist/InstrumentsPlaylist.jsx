import React from 'react';
import AudioPlayer from '../AudioPlayer/AudioPlayer';
import { useAuth } from '../../context/useAuthContext';

const InstrumentsPlaylist = ({ playlist, addSongToFavorites }) => {
  const { user } = useAuth();

  const handleAddSongClick = async (userId, songId, songTitle) => {
    try {
      await addSongToFavorites(userId, songId, songTitle);
    } catch (error) {
      console.error("Failed to add song to favorites:", error);
    }
  };

  return (
    <div className="min-w-[60rem] mx-auto mt-10 mb-10 p-6 bg-transparent shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold mb-4 text-white">Instruments Playlist</h2>
      <ul className="space-y-4">
        {playlist.map((song, index) => (
          <li
            key={index}
            className="flex flex-col p-4 bg-gray-100 rounded-lg hover:bg-gray-200 transition duration-300"
          >
            <div className="flex justify-between items-center">
              <div>
                <p className="text-xl font-medium">{song.title}</p>
              </div>
              <button
                disabled={!user}
                onClick={() => {
                  if (user) {
                    handleAddSongClick(user.uid, song.id, song.title);
                  }
                }}
                className={`ml-4 px-4 py-2 rounded-lg transition duration-300 text-lg ${user ? 'bg-blue-500 text-white hover:bg-blue-600' : 'bg-gray-400 text-gray-700 cursor-not-allowed'
                  }`}
              >
                Add to Favorites
              </button>
            </div>
            <AudioPlayer videoId={song.id} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InstrumentsPlaylist;

