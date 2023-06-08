import Sidebar from "../Sidebar/SIdebar"
import SpotifyBody from "../SpotifyBody/SpotifyBody"
import './Player.css'

const Player = () => {
  return (
    <div className="player_container">
        <Sidebar />
        <SpotifyBody />
    </div>
    // sub body goes here
    // music player goes here footer
  )
}

export default Player