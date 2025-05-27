// pages/Login.js
import React, { useState } from "react";
import { Link, useNavigate, Navigate } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  Alert,
} from "react-bootstrap";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!email.includes("@")) {
      setError("Please enter a valid email address");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    setError("");
    console.log("Login submitted:", { email, password, rememberMe });
    const timestamp = new Date().toISOString();
    const userData = { email, password, rememberMe, timestamp };
    localStorage.setItem("userData", JSON.stringify(userData));
    navigate("/Home");
  };

  return (
    <Container
      fluid
      className="bg-light login-page"
      style={{ minHeight: "100vh" }}
    >
      <Row
        className="justify-content-center align-items-center"
        style={{ minHeight: "100vh" }}
      >
        <Col md={5} lg={4}>
          <Card className="shadow">
            <Card.Body className="p-4">
              <h2 className="card-title text-center mb-4">Login</h2>

              {error && <Alert variant="danger">{error}</Alert>}

              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Check
                    type="checkbox"
                    label="Remember me"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                  />
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100 mb-3">
                  Sign In
                </Button>

                <div className="text-center mb-3">
                  <Link to="/forgot-password" className="text-decoration-none">
                    Forgot password?
                  </Link>
                </div>

                <div className="text-center">
                  <p className="text-muted">
                    Don't have an account?{" "}
                    <Link to="/signup" className="text-decoration-none">
                      Register
                    </Link>
                  </p>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
