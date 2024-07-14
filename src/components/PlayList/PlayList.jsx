import React from "react";
import { AudioPlayer } from "../index";

const PlayList = ({ songs, onAdd, onRemove, isFavoritePage }) => {
  return (
    <div>
      <h1>Playlists</h1>
      <ul>
        {songs.map((song) => (
          <li key={song.id}>
            <h2>{song.title}</h2>
            {isFavoritePage ? (
              <button onClick={() => onRemove(song.id)}>Remove</button>
            ) : (
              <button onClick={() => onAdd(song.id)}>Add To Favorites</button>
            )}
            <AudioPlayer videoId={song.id} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlayList;
