import React from "react";
import { useAuth } from "./contexts/AuthContext.jsx";

export default function Layout({ children, className = "", style = {} }) {
  const { isAuthenticated, logout } = useAuth();
  return (
    <div
      className={
        "relative min-h-screen flex flex-col items-center justify-center bg-cover bg-center " +
        className
      }
      style={{ backgroundImage: "url('/bg.png')", ...style }}
    >
      {isAuthenticated && (
        <button
          onClick={logout}
          className="absolute top-4 right-4 px-3 py-1 bg-red-600 text-white rounded"
        >
          Logout
        </button>
      )}
      {children}
    </div>
  );
}
