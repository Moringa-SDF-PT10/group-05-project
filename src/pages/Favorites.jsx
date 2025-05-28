import React from 'react'
import { useMovieContext } from '../context/MovieContexts'
import MovieCard from '../components/MovieCard'
import { Link } from 'react-router-dom'
import  "../styles/Favorites.css"
const Favorites = () => {

    const {favorites, clearFavorites} = useMovieContext ()

    if (favorites.length > 0) {

        return(
            <div className= "favorites">
                <h2> Your Favorites</h2>
                <button onClick={clearFavorites} 
                className= "clear-btn">
                    Clear All
                </button>
                <div className="movies-grid">
                    {favorites.map( (movie) => (
                        <MovieCard movie={movie} key= {movie.id}/>
                    ))}
                </div>
            </div>
        )
    }
  return (
    <div className= "favorite-empty">
        <h2>Add Favorite Movies</h2>
        <p>
         Your favorite movie list is empty. <Link to="/">Browse movies</Link> to add.
        </p>
    </div>
  )
}

export default Favorites