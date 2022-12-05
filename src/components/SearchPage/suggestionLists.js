import { Link } from "react-router-dom";

const SuggestionLists = ({ searchResults }) => {
    
    const List = ({ movie }) => {
        const detailUrl = `/movies/${movie.id}`
        return (
            <>
                <span className="suggestion-titles">
                    <Link to={detailUrl} className="movie-link">
                        {movie.original_title}
                    </Link>
                </span>
                <span className="suggestion-border"></span>
            </>
        )
    }
    
    const suggestionLists = searchResults.map((obj, i) => {
        return <List movie={obj} key={i} />
    })

    return (
        <div className="suggestion-container">
            <label className="suggestions">
                Explore More Related To Your Search :
            </label>
            <div className="suggestion-list">
                {suggestionLists}
            </div>
        </div>
    )
}
export default SuggestionLists;