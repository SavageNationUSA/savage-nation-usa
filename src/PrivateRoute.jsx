import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./contexts/AuthContext.jsx";

export default function PrivateRoute({ children }) {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return children;
}
