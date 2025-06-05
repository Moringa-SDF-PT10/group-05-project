// ProtectedRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const storedProfile = localStorage.getItem("cinemahubUser");
  if (!storedProfile) {
    return <Navigate to="/login" />;
  }
  try {
    if (storedProfile) {
      const parsedProfile = JSON.parse(storedProfile);
      if (!parsedProfile.email && !parsedProfile.password) {
        return <Navigate to="/login" />; // Redirect to login if not authenticated
      }
    }
  } catch (error) {
    return <Navigate to="/login" />; // Redirect to login if not authenticated
  }

  return children; // Render the protected component when authenticated
};

export default ProtectedRoute;
