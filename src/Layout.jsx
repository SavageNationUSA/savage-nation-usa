import React from "react";
import { Outlet } from "react-router-dom";
import { useAuth } from "./contexts/AuthContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Layout({ className = "", style = {} }) {
  const { isAuthenticated, logout } = useAuth();
  return (
    <div
      className={"relative min-h-screen flex flex-col bg-cover bg-center " + className}
      style={{ backgroundImage: "url('/bg.png')", ...style }}
    >
      <Navbar />
      {isAuthenticated && (
        <div className="absolute top-20 right-4">
          <button
            onClick={logout}
            className="px-4 py-2 bg-red-600 text-white rounded"
          >
            Logout
          </button>
        </div>
      )}
      <main className="flex-grow container mx-auto w-full p-4 sm:p-8 mt-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
