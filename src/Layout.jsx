import React from "react";
import { Outlet } from "react-router-dom";
import { useAuth } from "./contexts/AuthContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./styles/layout.scss";

export default function Layout({ className = "", style = {} }) {
  const { isAuthenticated, logout } = useAuth();
  return (
    <div
      className={"layout-grid relative bg-cover bg-center " + className}
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
      <main className="section container mx-auto w-full">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
