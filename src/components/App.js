import { useState, useEffect } from "react";
import NavigationBar from "./NavigationBar";
import SearchView from "./SearchPage/searchView";
import Home from "./HomePage/HomePage";
import TvShows from "./TvShows";
import Movies from "./Movies";
import NewAndPopular from "./New&Popular";
import MyList from "./MyList";
import BrowseByLanguage from "./BrowseByLanguage";
import { Routes, Route, useNavigate } from "react-router-dom";
import MovieView from "./MovieView/MovieView";

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
        <Route path="/home" element={<Home />} />
        <Route
          path="/search"
          element={
            <SearchView keyword={searchText} searchResults={searchResults} />
          }
        />
        <Route path="/tvshows" element={<TvShows />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/new&popular" element={<NewAndPopular />} />
        <Route path="/mylist" element={<MyList />} />
        <Route path="/browsebylanguage" element={<BrowseByLanguage />} />
        <Route path="/movies/:id" element={<MovieView/>}/>
      </Routes>
    </div>
  );
};

export default App;
