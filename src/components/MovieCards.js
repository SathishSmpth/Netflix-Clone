import { Link } from "react-router-dom";
import netflixSymbol from "../logo/netflixSymbol.svg";

const MovieCard = ({searchResults}) => {

  const Card =({ movie })=> {

    const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    const detailUrl = `/movies/${movie.id}`
  
    const defaultImage = (onError) => {
      onError.target.src = require("../icons/defaultImage.jpg")
    }

    return (
      <div className="card">
        <div className="card-image-container">
          <img className="netflixLogo" src={netflixSymbol} alt=""/>
          <img
            className="card-image"
            src={posterUrl}
            alt={movie.original_title}
            onError={defaultImage}
          />
        </div>
        <div className="card-body">
          <h5 className="card-title">{movie.original_title}</h5>
          <button className="detailsButton">
            <Link to={detailUrl} className="detailsLink"><b>Watch and More Details</b></Link>
          </button>
        </div>
      </div>
    )
  }

  const CardResult = searchResults.map((obj, i)=>{return < Card movie={obj} key={i} />})

  return(
    <div className="card-container" >
      {CardResult}
    </div>
  )


}
export default MovieCard;