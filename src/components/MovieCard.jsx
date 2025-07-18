import React, { useState } from "react";
import "../styles/MovieCard.css";
import { useMovieContext } from "../context/MovieContexts";
import { Button } from "react-bootstrap";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import MovieTrailer from "./MovieTrailer";

function MovieCard({ movie, showRemove = false, onRemove }) {
  const {
    isFavorite,
    addToFavorites,
    removeFromFavorites,
    updateWatchlistMovie,
  } = useMovieContext();

  const favorite = isFavorite(movie.id);

  const [note, setNote] = useState(movie.note || "");
  const [isEditingNote, setIsEditingNote] = useState(false);

  const [showTrailer, setShowTrailer] = useState(false);

  function handleFavoriteClick(e) {
    e.preventDefault();
    if (favorite) removeFromFavorites(movie.id);
    else addToFavorites(movie);
  }

  function handleNoteSave() {
    updateWatchlistMovie(movie.id, { note });
    setIsEditingNote(false); // Exit editing mode after save
  }

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <div className="movie-overlay">
          {showRemove ? (
            <Button
              variant="outline-warning"
              onClick={() => onRemove(movie.id)}
            >
              Remove
            </Button>
          ) : (
            <button
              className={`favorite-btn ${favorite ? "active" : ""}`}
              onClick={handleFavoriteClick}
            >
              ♥
            </button>
          )}
        </div>
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date?.split("-")[0]}</p>
        <p>⭐ {movie.vote_average}</p>
        <p>
          {movie.overview
            ? movie.overview.slice(0, 100) + "..."
            : "No overview available"}
        </p>
        <Button variant="danger" onClick={() => setShowTrailer(true)}>
          Watch Trailer
        </Button>
        <MovieTrailer
          show={showTrailer}
          handleClose={() => setShowTrailer(false)}
          movieTitle={movie.title}
        />

        {/* Show saved note if exists and not editing */}
        {movie.note && !isEditingNote && (
          <p
            className="saved-note"
            onClick={() => setIsEditingNote(true)}
            style={{ cursor: "pointer" }}
            title="Click to edit note"
          >
            <strong>Note:</strong> {movie.note}
          </p>
        )}

        {/* Note Editor Section, shows if showRemove is true AND editing mode */}
        {showRemove && (isEditingNote || !movie.note) && (
          <div className="note-editor">
            <textarea
              placeholder="Add a note..."
              value={note}
              onChange={(e) => setNote(e.target.value)}
            />
            <button onClick={handleNoteSave}>Save Note</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default MovieCard;
