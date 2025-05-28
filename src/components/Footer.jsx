// components/Footer.js
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <div>
      <footer className="mt-5 py-4 bg-dark text-white">
        <Container>
          <Row>
            <Col md={4} className="mb-3">
              <h5>CinemaHub</h5>
              <p>
                Your ultimate destination for movie streaming, discovery, and
                trivia.
              </p>
            </Col>
            <Col md={4} className="mb-3">
              <h5>Quick Links</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/discoverByDirector">Discover by Director</a>
                </li>
                <li>
                  <a href="/discoverByDecade">Discover by Decade</a>
                </li>
              </ul>
            </Col>
            <Col md={4}>
              <h5>Connect With Us</h5>
              <div className="social-links">
                <a href="#" className="text-white me-2">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="#" className="text-white me-2">
                  <i className="bi bi-twitter"></i>
                </a>
                <a href="#" className="text-white me-2">
                  <i className="bi bi-instagram"></i>
                </a>
              </div>
            </Col>
          </Row>
          <hr className="bg-light" />
          <Row>
            <Col className="text-center">
              <p className="mb-0">
                &copy; {new Date().getFullYear()} CinemaHub. All rights
                reserved.
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
}

export default Footer;
