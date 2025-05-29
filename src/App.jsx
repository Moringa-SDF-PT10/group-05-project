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
import DiscoverByDirector from "./pages/DiscoverByDirector";
import DiscoverByDecade from "./pages/DiscoverByDecade";
import "./styles/App.css";
import Signup from "./pages/Signup";
import { useState, useEffect } from "react";
import ProtectedRoute from "./routes/ProtectedRoute";
import Favorites from "./pages/Favorites";
import Dashboard from "./pages/Dashboard";
import ErrorPage from "./pages/errorPage";

function App() {
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
                <ProtectedRoute>
                  <Watchlist />
                </ProtectedRoute>
              }
            />
            <Route
              path="/Favorites"
              element={
                <ProtectedRoute>
                  <Favorites />
                </ProtectedRoute>
              }
            />
            <Route
              path="/Trivia"
              element={
                <ProtectedRoute>
                  <Trivia />
                </ProtectedRoute>
              }
            />
            <Route
              path="/DiscoverByDirector"
              element={
                <ProtectedRoute>
                  <DiscoverByDirector />
                </ProtectedRoute>
              }
            />
            <Route
              path="/DiscoverByDecade"
              element={
                <ProtectedRoute>
                  <DiscoverByDecade />
                </ProtectedRoute>
              }
            />
            <Route
              path="/Dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
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
