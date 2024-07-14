import { useEffect, useState } from "react";

// import {
//   clearToken,
//   extractTokenFromHash,
//   fetchPlaylist,
//   getStoredToken,
//   redirectToLogin,
// } from "../../services/spotify/spotifyService";

const playlistId = "7Fwk585l5dPB7dxHzRqzAO";

const FavoritesPage = () => {
  const [token, setToken] = useState("");
  const [playlistData, setPlaylistData] = useState(null);

  // useEffect(() => {
  //   const hash = window.location.hash;
  //   let storedToken = getStoredToken();

  //   if (!storedToken && hash) {
  //     storedToken = extractTokenFromHash(hash);
  //     window.location.hash = "";
  //   }

  //   if (storedToken) {
  //     console.log("Access Token:", storedToken);
  //     setToken(storedToken);
  //     fetchPlaylist(storedToken, playlistId)
  //       .then((data) => {
  //         console.log("Playlist Data:", data);
  //         setPlaylistData(data);
  //       })
  //       .catch((error) => {
  //         if (error.response && error.response.status === 401) {
  //           clearToken();
  //           setToken("");
  //           setPlaylistData(null);
  //           redirectToLogin();
  //         }
  //       });
  //   } else {
  //     console.log("No Access Token Found");
  //     redirectToLogin();
  //   }
  // }, []);

  return (
    <div className="App">
      <h1>Spotify API Basic Call</h1>
      {token && playlistData ? (
        <div>
          <h2>Playlist: {playlistData.name}</h2>
          <p>Description: {playlistData.description}</p>
          <iframe
            title="Spotify Embed: Recommendation Playlist"
            src={`https://open.spotify.com/embed/playlist/${playlistId}?utm_source=generator&theme=0`}
            width="100%"
            height="380"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
      ) : (
        <p>Loading playlist data...</p>
      )}
    </div>
  );
};

// const FavoritesPage = () => {
//   const [playList, setPlayList] = useState();
//   const [favoriteSongs, setFavoriteSongs] = useState();
//   const [filteredSongs, setFilteredSongs] = useState();

//   useEffects(() => {
//     const fetchUserData = async () => {
//       try {
//         const playListRes = await // fetch playlist
//         setPlayList(playListRes.data);
//         const res = await // get user
//         setFavoriteSongs(res.favorites);
//       } catch (error) {}
//     };
//     fetchUserData();
//   }, []);

//   useEffect(() => {
//     setFilteredSongs(favoriteSongs.filter((favSong) => favSong.id === song.id));
//   }, []);

//   return <div>FavoritesPage</div>;
// };

export default FavoritesPage;

// userData.favorite
// allSongsPlaylist

/*
7INCKHDLQ7qF6BlJqvwsWo -> playlist id


*/
