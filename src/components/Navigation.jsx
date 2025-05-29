import React from "react";
import { Link } from "react-router-dom";
import { Container, Nav, Navbar, Form, Button } from "react-bootstrap";
import { FiSearch } from "react-icons/fi";
import SearchModal from "./SearchModal";
import { useState } from "react";
import { searchMovies } from "../api/api";
function Navigation() {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div>
      <Navbar
        bg="dark"
        variant="dark"
        expand="lg"
        className="custom-navbar sticky-top"
      >
        <Container fluid>
          <Navbar.Brand as={Link} to="/" className="brand-logo">
            <span className="netflix_red">Cinema</span>
            <span className="hulu_green">Hub</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" navbarScroll>
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/discoverByDirector">
                Discover by Director
              </Nav.Link>
              <Nav.Link as={Link} to="/discoverByDecade">
                Discover by Decade
              </Nav.Link>
              <Nav.Link as={Link} to="/trivia">
                Trivia
              </Nav.Link>
              <Nav.Link as={Link} to="/watchlist">
                Watchlist
              </Nav.Link>
              <Nav.Link as={Link} to="/favorites">
                Favorites
              </Nav.Link>
            </Nav>
            <div className="d-flex">
              {localStorage.getItem("cinemahubUser") ? (
                <>
                  <Button
                    style={{ MarginRight: "20px" }}
                    variant="light"
                    onClick={() => {
                      window.location.href = "/Dashboard";
                    }}
                    className="auth-button"
                  >
                    DashBoard
                  </Button>
                  <Button
                    variant="warning"
                    onClick={() => {
                      localStorage.removeItem("cinemahubUser");
                      window.location.href = "/";
                    }}
                    className="auth-button"
                  >
                    Logout
                  </Button>
                  <Button
                    variant="outline-info"
                    className="ms-2 search-button"
                    onClick={() => setShowSearch(true)}
                  >
                    <FiSearch size={20} />
                  </Button>

                  <SearchModal
                    show={showSearch}
                    handleClose={() => setShowSearch(false)}
                    searchMovies={searchMovies}
                  />
                </>
              ) : (
                <>
                  <Button
                    variant="success"
                    as={Link}
                    to="/login"
                    className="me-2 auth-button"
                  >
                    Login
                  </Button>
                  <Button
                    variant="danger"
                    as={Link}
                    to="/signup"
                    className="auth-button"
                  >
                    Sign Up
                  </Button>
                  <Button
                    variant="outline-info"
                    className="ms-2 search-button"
                    onClick={() => setShowSearch(true)}
                  >
                    <FiSearch size={20} />
                  </Button>

                  <SearchModal
                    show={showSearch}
                    handleClose={() => setShowSearch(false)}
                    searchMovies={searchMovies}
                  />
                </>
              )}
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navigation;
