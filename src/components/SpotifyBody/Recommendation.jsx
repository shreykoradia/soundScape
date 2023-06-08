import "./newRelease.css"

const Recommendation = ({title , image}) => {
  return (
    <div className="newRelease">
      {(
        <>
        <img src={image} alt="image"/>
          <p>
            {title}
          </p>
        </>
      )}
      </div>
  )
}

export default Recommendation