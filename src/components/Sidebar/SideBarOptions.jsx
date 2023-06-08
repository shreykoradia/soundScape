import "./SidebarOption.css";
const SideBarOptions = ({ OptionTitle, Icon , Image}) => {
  return (
    <div className="sidebar_option">
      {Icon && (
        <>
          <h4 className="sidebarOption__icon" onClick={() => window.location.href = "/"}>
            <Icon /> {OptionTitle}
          </h4>
        </>
      )}
      {
        Image && (
          <div className="playlist_render">
          <img src={Image} alt="image" className="playlist_image" />
          <p className="list_p">{OptionTitle}</p>
          </div>
        )
      }
    </div>
  );
};

export default SideBarOptions;


// {
//   Image && (
    
//     Image.map((images) => {
//       <>
//       <img src={images.url} alt="image" />
//     <p>{OptionTitle}</p>
//      </>
//     })
    
//   )
// }