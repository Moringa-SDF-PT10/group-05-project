import React from "react";
import "../styles/MovieCard.css";

// MovieCard component displays individual movie details.
// Expects a `movie` prop with structure: { title, poster_path, release_date, vote_average, overview }

function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <div className="movie-overlay">
          <button className="favorite-btn">♥</button>
        </div>
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p> {movie.release_date?.split("-")[0]}</p>{" "}
        {/*Get the release year from the full date */}
        <p>⭐ {movie.vote_average}</p>
        <p>
          {movie.overview
            ? movie.overview.slice(0, 100) + "..."
            : "No overview available"}
        </p>
        <a href="#" className="btn btn-primary">
          Watch Trailer
        </a>
      </div>
    </div>
  );
}

export default MovieCard;
