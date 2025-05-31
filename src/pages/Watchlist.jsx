import React from "react";
import { useMovieContext } from "../context/MovieContexts";
import { Link } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import "../styles/Watchlist.css";
import Button from "react-bootstrap/Button";

const Watchlist = () => {
  const { watchlist, removeFromWatchlist, clearWatchlist } = useMovieContext();

  return (
    <div className="watchlist-container">
      <h2>My Watchlist</h2>

      {watchlist.length === 0 ? (
        <p>
          No movies in watchlist. <Link to="/">Browse movies</Link>
        </p>
      ) : (
        <>
          <div className="movie-grid">
            {watchlist.map((movie) => (
              <MovieCard
                key={movie.id}
                movie={movie}
                showRemove={true}
                onRemove={removeFromWatchlist}
              />
            ))}
          </div>

          <div style={{ marginTop: "1rem" }}>
            <button className="clear-btn" onClick={clearWatchlist}>
              Clear Watchlist
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Watchlist;
