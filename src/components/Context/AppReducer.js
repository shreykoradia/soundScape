export default (state, action) => {
  switch (action.type) {
    case "GET_USER_PLAYLIST":
      return {
        ...state,
        playlist: action.playlist,
      };
    case "GET_TOP_ARTIST":
      return {
        ...state,
        artist: action.artist,
      };
    case "GET_SAVED_ALBUM":
      return {
        ...state,
        album: action.album,
      };
    case "GET_SHOWS":
      return {
        ...state,
        podcast: action.podcast,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.payload,
      };
    case "GET_RECO":
      return {
        ...state,
        recents: action.recents,
      };
      case "GET_USER":
        return{
          ...state,
          user: action.user,
        }
    default:
      return state;
  }
};
