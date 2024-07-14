import axios from 'axios';

const clientId = '03ee5fc6fd8d41f2bbc50b8493734d95';
const redirectUri = 'http://localhost:5174/';
const authEndpoint = 'https://accounts.spotify.com/authorize';
const scopes = [
  'user-read-private',
  'user-read-email',
  'playlist-read-private',
  'playlist-read-collaborative'
];

const getStoredToken = () => {
  const token = window.localStorage.getItem('spotify_token');
  const tokenExpiry = window.localStorage.getItem('spotify_token_expiry');
  if (token && tokenExpiry && Date.now() > parseInt(tokenExpiry, 10)) {
    window.localStorage.removeItem('spotify_token');
    window.localStorage.removeItem('spotify_token_expiry');
    return null;
  }
  return token;
};

const extractTokenFromHash = (hash) => {
  const tokenFromHash = hash.substring(1).split('&').find(elem => elem.startsWith('access_token')).split('=')[1];
  const tokenExpiryFromHash = hash.substring(1).split('&').find(elem => elem.startsWith('expires_in')).split('=')[1];
  window.localStorage.setItem('spotify_token', tokenFromHash);
  window.localStorage.setItem('spotify_token_expiry', Date.now() + parseInt(tokenExpiryFromHash, 10) * 1000);
  return tokenFromHash;
};

const clearToken = () => {
  window.localStorage.removeItem('spotify_token');
  window.localStorage.removeItem('spotify_token_expiry');
};

const fetchPlaylist = async (token, playlistId) => {
  try {
    const { data } = await axios.get(`https://api.spotify.com/v1/playlists/${playlistId}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return data;
  } catch (error) {
    console.error('Error fetching playlist:', error.response ? error.response.data : error.message);
    if (error.response && error.response.status === 401) {
      clearToken();
    }
    throw error;
  }
};

const redirectToLogin = () => {
  window.location = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join('%20')}&response_type=token&show_dialog=true`;
};

export {
  getStoredToken,
  extractTokenFromHash,
  clearToken,
  fetchPlaylist,
  redirectToLogin
};
