import React, { useState, useEffect } from "react";
import { Form, Button, Card, Container, Alert } from "react-bootstrap";

function Dashboard() {
  const [user, setUser] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("cinemahubUser"));
    if (userData) {
      setUser(userData);
      setFormData({
        name: userData.name || "",
        email: userData.email || "",
        password: userData.password || "",
      });
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedUser = { ...user, ...formData };
    localStorage.setItem("cinemahubUser", JSON.stringify(updatedUser));
    setUser(updatedUser);
    setEditMode(false);
    setSuccessMessage("Profile updated successfully!");
    setTimeout(() => setSuccessMessage(""), 3000);
  };

  if (!user) {
    return (
      <Container className="mt-5">
        <Alert variant="warning">No user data found. Please login.</Alert>
      </Container>
    );
  }

  return (
    <Container className="mt-5">
      <Card className="shadow">
        <Card.Header className="bg-primary text-white">
          <h3>User Dashboard</h3>
        </Card.Header>
        <Card.Body>
          {successMessage && <Alert variant="success">{successMessage}</Alert>}

          {editMode ? (
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>

              <div className="d-flex gap-2">
                <Button variant="primary" type="submit">
                  Save Changes
                </Button>
                <Button variant="secondary" onClick={() => setEditMode(false)}>
                  Cancel
                </Button>
              </div>
            </Form>
          ) : (
            <>
              <div className="mb-4">
                <h5>Profile Information</h5>
                <hr />
                <p>
                  <strong>Name:</strong> {user.name}
                </p>
                <p>
                  <strong>Email:</strong> {user.email}
                </p>
                <p>
                  <strong>Password:</strong> ••••••••
                </p>
              </div>

              <Button variant="primary" onClick={() => setEditMode(true)}>
                Edit Profile
              </Button>
            </>
          )}
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Dashboard;
