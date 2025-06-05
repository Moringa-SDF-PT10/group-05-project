import React, { useState, useEffect } from "react";
import { Modal, Form, Button, Row, Col, Spinner } from "react-bootstrap";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

function MovieTrailer({ show, handleClose, movieTitle }) {
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    if (movieTitle) {
      movieTrailer(movieTitle)
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => {
          console.error("Error fetching trailer:", error);
        });
    }
  }, [movieTitle]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  return (
    <Modal show={show} onHide={handleClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>{movieTitle} trailer Playing</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {trailerUrl ? (
          <YouTube videoId={trailerUrl} opts={opts} />
        ) : (
          <p>Loading trailer...</p>
        )}
      </Modal.Body>
    </Modal>
  );
}

export default MovieTrailer;
