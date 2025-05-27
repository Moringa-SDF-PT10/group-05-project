// App.js
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  Navigate,
} from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Watchlist from "./pages/Watchlist";
import Trivia from "./pages/Trivia";
import DiscoverDirector from "./pages/DiscoverByDirector";
import DiscoverDecade from "./pages/DiscoverByDecade";
import "./styles/App.css";
import Signup from "./pages/Signup";
import ErrorPage from "./pages/ErrorPage";
import { useState, useEffect } from "react";
import ProtectedRoute from "./routes/ProtectedRoute";
import Favorites from "./pages/Favorites";
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <div className="app-container">
        <Navigation />
        <div className="content-wrap">
          <Routes>
            <Route path="/Login" element={<Login />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/" element={<Home />} />
            <Route
              path="/Watchlist"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <Watchlist />
                </ProtectedRoute>
              }
            />
             <Route
              path="/Favorites"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <Favorites />
                </ProtectedRoute>
              }
            />
            <Route
              path="/Trivia"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <Trivia />
                </ProtectedRoute>
              }
            />
            <Route
              path="/DiscoverDirector"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <DiscoverDirector />
                </ProtectedRoute>
              }
            />
            <Route
              path="/DiscoverDecade"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <DiscoverDecade />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
