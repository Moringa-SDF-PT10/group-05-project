// ProtectedRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ isAuthenticated, children }) => {
  console.log(isAuthenticated + " isAuthenticated"); //this is failing i dont know why

  const storedProfile = localStorage.getItem("userData");
  console.log(storedProfile + " storedProfile");

  try {
    if (storedProfile) {
      const parsedProfile = JSON.parse(storedProfile);
      if (!parsedProfile.email && !parsedProfile.password) {
        console.log("User not Authenticated");
        return <Navigate to="/login" />; // Redirect to login if not authenticated
      }
    }
  } catch (error) {
    console.error("Error parsing user data:", error);
    console.log("User not Authenticated");
    return <Navigate to="/login" />; // Redirect to login if not authenticated
  }

  return children; // Render the protected component when authenticated
};

export default ProtectedRoute;
