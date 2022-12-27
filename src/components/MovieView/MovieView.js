import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MovieView = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const [castAndCrew, setCastAndCrew] = useState([]);
  const [crewLength,setCrewLength] = useState(0)
  const [directorDetails,setDirectorDetails] = useState({})

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=3d23c0d560393968f848f436205e4c3e&append_to_response=credits`
    )
      .then((response) => response.json())
      .then((data) =>{
        setMovieDetails(data)
        setCastAndCrew(data.credits)
        setCrewLength(data.credits.crew.length)
      });
  }, [id]);

  const backdropUrl = `https://image.tmdb.org/t/p/w500${movieDetails.backdrop_path}`;
  const posterUrl = `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`;
  const release_date = movieDetails?.release_date?.slice(0, 4);
  const runTimeHour = Math.floor(movieDetails?.runtime / 60);
  const runTimeMin = movieDetails?.runtime - runTimeHour * 60;

  if(crewLength > 0){
    console.log(crewLength)
    for(let i=0;i <= crewLength; i++){
      if (castAndCrew?.crew[i]?.job === "Director") {
        setDirectorDetails(castAndCrew?.crew[i]);
        console.log(castAndCrew?.crew[i])
        break;
      }
    }
    setCrewLength(0)
  }

  return (
    <div className="movie-view">
      <div className="movie-backdrop">
        <img className="movieView-backdrop-image" src={backdropUrl} alt="" />
        <div className="movie-container">
          <div>
            <img src={posterUrl} alt="" />
          </div>
          <div>
            <div>
              {movieDetails?.original_title}({release_date})
            </div>
            <ul>
              <li>
                {movieDetails?.genres?.map((data) => (
                  <span>{data.name}</span>
                ))}
              </li>
              <li>
                {runTimeHour}h {runTimeMin}min
              </li>
            </ul>
            <div>{movieDetails?.tagline}</div>
            <div>
              <div>Overview</div>
              <div>{movieDetails?.overview}</div>
            </div>
            <div>{directorDetails?.name}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieView;
