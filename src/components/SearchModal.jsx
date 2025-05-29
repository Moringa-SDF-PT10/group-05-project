import React, { useState } from "react";
import { Modal, Form, Button, Row, Col } from "react-bootstrap";
import MovieCard from "./MovieCard";

function SearchModal({ show, handleClose, searchMovies }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Modal show={show} onHide={handleClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Search Movies</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <div className="d-flex mb-4">
            <Form.Control
              type="text"
              placeholder="Search for movies..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <Button
              variant="primary"
              type="submit"
              className="ms-2"
              disabled={isLoading}
            >
              {isLoading ? "Searching..." : "Search"}
            </Button>
          </div>
        </Form>
        <p>Harriet Load you movie here below</p>
      </Modal.Body>
    </Modal>
  );
}

export default SearchModal;
