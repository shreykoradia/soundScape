import { createContext, useContext, useReducer } from "react"
import AppReducer from "./AppReducer";
import SpotifyWebApi from "spotify-web-api-js";

// initial-state 

export const initialState = {
    user : null,
    token : null,
    loading : true,
    error : null,
    playlist : [],
    artist : null,
    album : [],
    podcast : [],
    recents : null,
}

const spotifyAPI = new SpotifyWebApi();


// create context

export const GlobalContext = createContext(initialState);

// Provider Component 

export const GlobalProvider = ({children}) => {
    const [state , dispatch] = useReducer(AppReducer , initialState)

// Actions to be performed inside our useReducer 
     
// setSpotifyToken 
     const setSpotifyToken = (tokenId) => {
      spotifyAPI.setAccessToken(tokenId)
        dispatch({
            type : "SET_TOKEN",
            payload : tokenId
        })
      } 
// spotify Playlist
      const getSpotifyUserPlaylist = () => {
        spotifyAPI.getUserPlaylists().then((playlist) => 
        dispatch({
          type: "GET_USER_PLAYLIST",
          playlist,
        })
      )}

// spotify artist 
        const getUsersTopArtist = () => {
          spotifyAPI.getMyTopArtists().then((artist) => 
          dispatch({
            type : "GET_TOP_ARTIST",
            artist,
          }))
        }
// Spotify user top Albums
        const getUserSavedAlbum = () => {
          spotifyAPI.getMySavedAlbums().then((album) => 
          dispatch({
            type : "GET_SAVED_ALBUM",
            album,
          }))
        }
// spotify user Podcast
        const getUserPodcast = () => {
          spotifyAPI.getMySavedShows().then((podcast) => 
          dispatch({
            type : "GET_SHOWS",
            podcast,
          }))
        }
// spotify get Recommendation 
        const getRecentlyPlayed = () => {
          spotifyAPI.getMyTopTracks().then((recents) => 
          dispatch({
            type: "GET_RECO",
            recents,
          }))
        }
// get user
        const getUsers = () => {
          spotifyAPI.getMe().then((user)=> dispatch({
            type : "GET_USER",
            user,
          }))
        }
      return (
        <GlobalContext.Provider value={{
            token : state.token,
            error : state.error,
            loading : state.loading,
            playlist : state.playlist,
            artist : state.artist,
            album : state.album,
            podcast : state.podcast,
            recents : state.recents,
            user: state.user,
            getUsersTopArtist,
            setSpotifyToken,
            getSpotifyUserPlaylist,
            getUserSavedAlbum,
            getUserPodcast,
            getRecentlyPlayed,
            getUsers,
          }}>
            {children}
        </GlobalContext.Provider>
      )
}

// export const useGlobalStateContext = () => {
//     return useContext(GlobalContext)
// }
