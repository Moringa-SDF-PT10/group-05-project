// ProtectedRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const storedProfile = localStorage.getItem("cinemahubUser");
  console.log(storedProfile + " storedProfile");
  if (!storedProfile) {
    console.log("No user profile found");
    return <Navigate to="/login" />;
  }
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
