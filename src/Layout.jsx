import React from "react";
import { useAuth } from "./contexts/AuthContext";

export default function Layout({ children, className = "", style = {} }) {
  const { isAuthenticated, logout } = useAuth();
  return (
    <div
      className={
        "min-h-screen relative flex flex-col items-center justify-center bg-cover bg-center " +
        className
      }
      style={{ backgroundImage: "url('/bg.png')", ...style }}
    >
      {isAuthenticated && (
        <div className="absolute top-4 right-4">
          <button
            onClick={logout}
            className="px-4 py-2 bg-red-600 text-white rounded"
          >
            Logout
          </button>
        </div>
      )}
      <div className="container mx-auto w-full p-4 sm:p-8">{children}</div>
    </div>
  );
}
