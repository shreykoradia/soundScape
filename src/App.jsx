import { useContext, useEffect } from "react";
import Login from "./components/Login/Login";
import { getTokenFromURL } from "./utils/getTokenFromURL";
import { GlobalContext } from "./components/Context/GlobalState";
import Player from "./components/SpotifyPlayer/Player";

const App = () => {
  const {
    setSpotifyToken,
    getSpotifyUserPlaylist,
    getUsersTopArtist,
    getUserSavedAlbum,
    getUserPodcast,
    getUsers,
    getRecentlyPlayed,
  } = useContext(GlobalContext);
  const hashToken = getTokenFromURL();
  // window.location.hash="";
  let _token = hashToken.access_token;
  useEffect(() => {
    if (_token) {
      setSpotifyToken(_token);
      getSpotifyUserPlaylist();
      getUsersTopArtist();
      getUserSavedAlbum();
      getUserPodcast();
      getUsersTopArtist();
      getUsers();
      getRecentlyPlayed();
    }
  }, []);
  return (
    <div className="parent-container">
      {!_token && <Login />} {_token && <Player />}
    </div>
  );
};

export default App;
