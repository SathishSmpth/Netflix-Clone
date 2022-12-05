import { useState, useEffect } from "react";
import netflixSymbol from "../logo/netflixSymbol.svg";

const Home = () => {

  const [movie, setMovie] = useState("");
  const [movieId, setMovieId] = useState(Math.floor(Math.random() * 100000));

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=3d23c0d560393968f848f436205e4c3e&language=en-US`
    )
      .then((response) => response.json())
      .then((data) => {
        setMovie(data);
      });
  }, [movieId]);

  if(movie.adult===true){
    setMovieId(Math.floor(Math.random() * 1000000))
  }
  const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  console.log(movie);

  return (
    <div className="home-page-container">
      <div className="home-page-back-drop">
        <img
         className="image"
          src={posterUrl}
          alt=""
         onError={()=>{setMovieId(Math.floor(Math.random() * 1000000));}}
        />
        <div className="back-drop-content">
          <div className="title-section">
            <div className="logo-section">
              <img className="logo" src={netflixSymbol} alt="" />
              <div>FILM</div>
            </div>
            <div className="title">{movie.original_title}</div>
            <div className="description">{movie.overview}</div>
          </div>
          <div>
            <div className="play-and-more-info">
              <button className="play-button">PLAY</button>
              <button className="more-info-button">MORE INFO</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
