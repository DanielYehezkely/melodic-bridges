import React from "react";
import { AudioPlayer } from "../index";

const PlayList = ({ songs, onAdd, onRemove, isFavoritePage }) => {
  return (
    <div>
      <h1 class="flex items-center justify-center text-5xl font-bold text-gray-800 m-10 p-4">
        My Playlist
      </h1>
      <ul class="flex flex-col items-center justify-center gap-4">
        {songs.map((song) => (
          <li
            key={song.id}
            class="flex items-center justify-center gap-10 p-4 rounded-lg shadow-lg [max-width: 100%]"
          >
            <div class="flex flex-col  items-center justify-center">
              <h2 class="text-2xl font-bold text-gray-800 mb-4">
                {song.title}
              </h2>
              {isFavoritePage ? (
                <button
                  onClick={() => onRemove(song.id)}
                  class="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  Remove
                </button>
              ) : (
                <button
                  onClick={() => onAdd(song.id)}
                  class="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  Add To Favorites
                </button>
              )}
            </div>
            <AudioPlayer videoId={song.id} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlayList;
