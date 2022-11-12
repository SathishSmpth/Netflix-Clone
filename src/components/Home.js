import { useState} from "react";

const Home = () => {

    const [movie, setMovie] = useState("");
    
    const movieId = Math.floor(Math.random() * 100)
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=3d23c0d560393968f848f436205e4c3e&language=en-US`)
        .then(response => response.json())
        .then(data => {
            setMovie(data)
        })
    console.log(movie);

    return (
        <div className="home-page-container">
            <h1>HOME PAGE</h1>
        </div>
    )
}
export default Home;