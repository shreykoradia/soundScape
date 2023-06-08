import SideBarOptions from "./SideBarOptions";
import "./Sidebar.css";
import { RiHomeHeartFill, RiSearchEyeFill } from "react-icons/ri";
import { VscLibrary } from "react-icons/vsc";
import { AiFillFileAdd } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
import { useContext, useState } from "react";
import { GlobalContext } from "../Context/GlobalState";

const Sidebar = () => {
  const { playlist, artist, album , podcast } = useContext(GlobalContext);
  const [toggleTab, setToggleTab] = useState(1);
  const toggleTabFn = (index) => {
    setToggleTab(index);
  };
  return (
    <div className="sidebar_container">
      <div className="card_prop sidebar_card">
        <SideBarOptions OptionTitle="Home" Icon={RiHomeHeartFill} />
        <SideBarOptions OptionTitle="Search" Icon={RiSearchEyeFill} />
      </div>
      <div className="card_prop sidebar_library_section">
        <div className="library_section_wrapper">
          <SideBarOptions OptionTitle="Your Pick's" Icon={VscLibrary} />
          <SideBarOptions Icon={AiFillFileAdd} />
          <SideBarOptions Icon={BsArrowRight} />
        </div>
        <div className="tab_container">
          <ul className="tab-list">
            <li
              className={toggleTab === 1 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTabFn(1)}
            >
              Playlists
            </li>
            <li
              className={toggleTab === 2 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTabFn(2)}
            >
              Artists
            </li>
            <li
              className={toggleTab === 3 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTabFn(3)}
            >
              Albums
            </li>
            <li
              className={toggleTab === 4 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTabFn(4)}
            >
              Podcasts
            </li>
          </ul>
        </div>
        <div className="content-container">
          {toggleTab === 1 &&
            playlist?.items?.map((list, index) => (
              <li className="library_list" key={index}>
                <SideBarOptions
                  OptionTitle={list.name}
                  Image={list.images[2].url}
                />
              </li>
            ))}
          {toggleTab === 2 &&
            artist?.items?.map((list, index) => (
              <li className="library_list" key={index}>
                <SideBarOptions
                  OptionTitle={list.name}
                  Image={list.images[2].url}
                />
              </li>
            ))}
             {toggleTab === 3 &&
            album?.items?.map((item, index) => (
              <li className="library_list " key={index}>
                <SideBarOptions
                  OptionTitle={item?.album?.name}
                  Image={item?.album?.images[2].url}
                />
              </li>
            ))}
            {toggleTab === 4 &&
            podcast?.items?.map((item, index) => (
              <li className="library_list " key={index}>
                <SideBarOptions
                  OptionTitle={item?.show?.name}
                  Image={item?.show?.images[2].url}
                />
              </li>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
