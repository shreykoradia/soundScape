import "./Login.css"
import SpotifyImage from "../../assets/Spotify-symbol-768x234.jpg"
import { accessUrl } from "../API/spotify"

const Login = () => {
  return (
   <div className="login-container">
    <img src={SpotifyImage} alt="Logo" className="image-container"/>
    <p className="title-header">Evil Spotify be Like: No Ads Only Music.</p>
    <a className="login-button" href={accessUrl}>LOGIN WITH SPOTIFY</a>
   </div>
  )
}

export default Login