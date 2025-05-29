import React, { useState, useEffect } from "react";
import { Modal, Form, Button, Row, Col,Spinner } from "react-bootstrap";
import MovieCard from "./MovieCard";

function SearchModal({ show, handleClose, searchMovies }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query.trim())
      return
    setIsLoading(true)
    try{
   
      const data = await searchMovies(query)
      setResults(data)
    }catch(error){
     console.error("Search error:", error)
    }finally{
      setIsLoading(false)
    }
  }

  useEffect(() => {
  if (!show) {
    setQuery("");
    setResults([]);
  }
}, [show]);


  return (
    <Modal show={show} onHide={handleClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Search Movies</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSearch}>
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
              {isLoading ? <Spinner animation="border" size="sm" />  : "Search"}
            </Button>
          </div>
        </Form>
         {results.length > 0 && (
           <Row xs={1} sm={2} md={3} lg={4} xl={5} className="g-4">
           {results.map((movie) => (
           <Col key={movie.id}>
            <MovieCard movie={movie} />
           </Col>
          ))}
          </Row>
        )}

         {!isLoading && results.length === 0 && query.trim() && (
         <p>No movies found for "{query}".</p>
        )}
      </Modal.Body>
    </Modal>
  );
}

export default SearchModal;
