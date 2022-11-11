import MovieCard from "./MovieCards";
import SuggestionLists from "./suggestionLists"; 

const SearchView = ({searchResults}) => {

  return (
    <div className="search-page-container">
      <SuggestionLists searchResults={searchResults}/>
      <MovieCard searchResults={searchResults}/>
    </div>
  );
};

export default SearchView;
