import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
// import { img } from "../assets/404.jpg";

function ErrorPage() {
  const navigate = useNavigate();

  return (
    <Container className="not-found-container d-flex flex-column justify-content-center align-items-center vh-100">
      <Row className="text-center mb-4">
        <Col>
          <div className="error-code display-1 fw-bold text-primary">404</div>
          <h1 className="mt-3">Oops! Page Not Found</h1>
          <p className="lead text-muted">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </Col>
      </Row>

      <Row>
        <Col className="text-center">
          <Button
            variant="primary"
            size="lg"
            className="me-3"
            onClick={() => navigate(-1)}
          >
            Go Back
          </Button>
          <Button
            variant="outline-primary"
            size="lg"
            onClick={() => navigate("/")} //navigate where use came
          >
            Return Home
          </Button>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col className="text-center text-muted small">
          <p>If you believe this is an error, please contact support.</p>
        </Col>
      </Row>
    </Container>
  );
}
export default ErrorPage;
