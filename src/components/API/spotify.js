
export const authEndPoint = "https://accounts.spotify.com/authorize";
const  redirectUri = "https://sound-scape-ten.vercel.app/";

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
    "user-library-read",
  ];

  const client_id  = import.meta.env.VITE_REACT_APP_CLIENT_ID;

  export const accessUrl = `${authEndPoint}?client_id=746510c6d4594257ad35b8779601302a&redirect_uri=${redirectUri}&scope=${scopes.join(
    "%20"
  )}&response_type=token&show_dialog=true`;
  