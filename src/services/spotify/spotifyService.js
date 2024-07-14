import axios from 'axios';

const clientId = '03ee5fc6fd8d41f2bbc50b8493734d95'; 
const clientSecret = 'YOUR_SPOTIFY_CLIENT_SECRET'; 
const tokenEndpoint = 'https://accounts.spotify.com/api/token'; 

let accessToken = '';
let tokenExpiryTime = 0;

const getAccessToken = async () => {
  if (accessToken && Date.now() < tokenExpiryTime) {
    return accessToken;
  }

  const response = await axios.post(
    tokenEndpoint,
    'grant_type=client_credentials',
    {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Basic ${btoa(`${clientId}:${clientSecret}`)}`
      }
    }
  );

  accessToken = response.data.access_token;
  tokenExpiryTime = Date.now() + response.data.expires_in * 1000; 

  return accessToken;
};

export const fetchPlaylist = async (playlistId) => {
  try {
    const token = await getAccessToken();
    const response = await axios.get(`https://api.spotify.com/v1/playlists/${playlistId}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching playlist:', error.response ? error.response.data : error.message);
    throw error;
  }
};