// src/ProtectedRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isauth = localStorage.getItem("LoggedIn");
  console.log(isauth);

  // if (isLoading) return <div>Loading...</div>;

  return isauth ? children : <Navigate to="/signup" replace />;
};

export default ProtectedRoute;
