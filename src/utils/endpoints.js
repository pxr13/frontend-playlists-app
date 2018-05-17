import { isProdEnv } from './helpers';

const SPOTIFY_BASE_API = 'https://api.spotify.com/v1/';
const DEV_BASE_API = 'http://localhost:8080/api';

export const SPOTIFY_SEARCH_ENDPOINT = `${SPOTIFY_BASE_API}search?limit=50&type=playlist&`;

// TODO: Refactor duplicate isProdEnv() calls
export const SIGN_IN_USER_ENDPOINT = isProdEnv()
  ? process.env.REACT_APP_PROD_SIGN_IN_USER
  : `${DEV_BASE_API}/authorize`;

export const SAVE_PLAYLIST_ENDPOINT = isProdEnv()
  ? process.env.REACT_APP_PROD_SAVE_PLAYLIST
  : `${DEV_BASE_API}/playlist`;

export const FETCH_SAVED_PLAYLISTS_ENDPOINT = isProdEnv()
  ? process.env.REACT_APP_PROD_FETCH_PLAYLISTS
  : `${DEV_BASE_API}/playlists`;