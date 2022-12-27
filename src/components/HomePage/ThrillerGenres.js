import React, { useEffect, useState } from "react";
import GenresCard from "./genresCard";

const ThrillerGenres = () => {
  const [thrillerMovie, setThrillerMovie] = useState();

  useEffect(() => {
    const randomPage = Math.floor(Math.random()*10)
    fetch(
      `https://api.themoviedb.org/3/movie/725201/similar?api_key=3d23c0d560393968f848f436205e4c3e&language=en-US&page=${randomPage}`
    )
      .then((res) => res.json())
      .then((data) => setThrillerMovie(data.results));
  }, []);

  const randomNumber = Math.floor(Math.random()*15)

  return (
    <div className="genres-container">
      <h1 className="genres-heading">Thriller Movies</h1>
      <div className="genres-card-container">
        {thrillerMovie?.slice(randomNumber, randomNumber+5)?.map((data, i) => (
          <GenresCard cardContent={data} key={i} />
        ))}
      </div>
    </div>
  );
};

export default ThrillerGenres;
