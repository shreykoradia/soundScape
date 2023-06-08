import { useContext, useState } from "react"
import "./SpotiyBody.css"
import { GlobalContext } from "../Context/GlobalState"
import Recommendation from "./Recommendation";

const SpotifyBody = () => {
  const {user , recents} = useContext(GlobalContext);
  const [text ,setText] = useState("");
  recents?.items.map((item) => console.log(item?.name))
  return (
    <div className="body_container">
      <div className="card_prop body_header">
        <h4>Your Top Play's <span>🎧/{user?.display_name}</span></h4>
        <div className="recommendation-container">
          {
             recents?.items.map((list , index) => 
             <li className="library_list" key={index}>
               <Recommendation title={list.name} image={list.album.images[1].url}/>
             </li>
             )
          }
        </div>
        { text ? <h3 onClick={() => setText("")}>{text}</h3> : 
      <button className="logout-button" onClick={() => setText("You Can't Cause I Don't want you to log out, I dont know now what should i build get me recommendations :{")}>Logout</button>
        }
      </div>
    </div>
  )
}

export default SpotifyBody