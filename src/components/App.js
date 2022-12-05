import { useState, useEffect } from "react";
import NavigationBar from "./NavigationBar";
import SearchView from "./SearchPage/searchView";
import Home from "./Home";
import TvShows from "./TvShows";
import Movies from "./Movies";
import NewAndPopular from "./New&Popular";
import MyList from "./MyList";
import BrowseByLanguage from "./BrowseByLanguage";
import { Routes, Route } from "react-router-dom";

const App = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    if (searchText) {
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=ab166ff82684910ae3565621aea04d62&language=en-US&query=${searchText}&page=1&include_adult=false`
      )
        .then((response) => response.json())
        .then((data) => {
          setSearchResults(data.results);
        });
    }
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
      </Routes>
    </div>
  );
};

export default App;
