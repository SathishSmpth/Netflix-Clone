import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import NavigationBar from "./Navbar";
import HomePage from "./HomePage/Home";
import MovieCard from "./SearchPage/MovieCards";
import TvShows from "./TvShows/TV";
import NewAndPopuar from "./NewAndPopular/New&Popuar";
import MovieView from "./MovieView/Movie";

const App = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (searchText) {
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=ab166ff82684910ae3565621aea04d62&language=en-US&query=${searchText}&include_adult=false`
      )
        .then((response) => response.json())
        .then((data) => {
          setSearchResults(data.results);
        });
      navigate("/search");
    } else {
      navigate("/home");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchText]);

  return (
    <div className="container">
      <NavigationBar searchText={searchText} setSearchText={setSearchText} />
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route
          path="/search"
          element={
            <MovieCard keyword={searchText} searchResults={searchResults} />
          }
        />
        <Route path="/tvshows" element={<TvShows />} />
        <Route path="/new&popular" element={<NewAndPopuar />} />
        <Route path="/movies/:id" element={<MovieView/>}/>
      </Routes>
    </div>
  );
};

export default App;
