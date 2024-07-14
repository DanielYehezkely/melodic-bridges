// src/NotFoundPage.js
import React from 'react';
import AudioPlayer from '../../services/Youtube/AudioPlayer.js';

const NotFoundPage = () => {
  const playlists = [
    {
      id: '1',
      title: 'Playlist 1',
      description: 'This is playlist 1',
      videos: [
        { id: 'dQw4w9WgXcQ', title: 'Never Gonna Give You Up' }, // Replace with actual video IDs
        { id: '3JZ_D3ELwOQ', title: 'Charlie Puth - Attention' }, // Replace with actual video IDs
      ],
    },
    {
      id: '2',
      title: 'Playlist 2',
      description: 'This is playlist 2',
      videos: [
        { id: 'L_jWHffIx5E', title: 'Beastie Boys - Sabotage' }, // Replace with actual video IDs
        { id: 'Zi_XLOBDo_Y', title: 'Queen - Bohemian Rhapsody' }, // Replace with actual video IDs
      ],
    },
  ];

  return (
    <div>
      <h1>Playlists</h1>
      {playlists.map((playlist) => (
        <div key={playlist.id}>
          <h2>{playlist.title}</h2>
          <p>{playlist.description}</p>
          <ul>
            {playlist.videos.map((video) => (
              <li key={video.id}>
                <h3>{video.title}</h3>
                <AudioPlayer videoId={video.id} />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default NotFoundPage;


