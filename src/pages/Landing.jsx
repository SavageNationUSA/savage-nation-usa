import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext.jsx";
import { ShoppingCart } from "lucide-react";

const pages = [
  { key: "store",      label: "Store",      icon: ShoppingCart },
  "newsletter",
  "videos","about","contact","gallery",
  "faq","story","charities","mission","toolshed","weeklyblog"
];

export default function Landing() {
  const navigate = useNavigate();
  const { isAuthenticated, logout } = useAuth();
  const [navTerm, setNavTerm] = useState("");

  const handleNav = (term) => {
    const page = term.toLowerCase().trim();
    if (Array.isArray(pages) ? pages.some((p) => (typeof p === "object" ? p.key : p) === page) : false) {
      navigate("/" + page);
    }
    setNavTerm("");
  };

  return (
    <div className="relative min-h-screen flex bg-[url('/bg.png')] bg-cover bg-center text-white">
      {isAuthenticated && (
        <button
          onClick={logout}
          className="absolute top-4 right-4 px-3 py-1 bg-red-600 text-white rounded"
        >
          Logout
        </button>
      )}
      <aside className="w-64 bg-black bg-opacity-70 p-6">
        <h3 className="text-2xl font-bold mb-4">Navigation</h3>
        <nav className="flex flex-col space-y-2">
          {pages.map((p) => {
            const key = typeof p === "object" ? p.key : p;
            const label = typeof p === "object" ? p.label : p.charAt(0).toUpperCase()+p.slice(1);
            const Icon  = typeof p === "object" ? p.icon : null;
            return (
              <button
                key={key}
                onClick={() => handleNav(key)}
                className="flex items-center px-4 py-2 hover:bg-white/20 rounded transition"
              >
                {Icon && <Icon className="w-5 h-5 mr-2" />}
                {label}
              </button>
            );
          })}
        </nav>
      </aside>
      <main className="flex-1 p-10">
        <h2 className="text-4xl font-bold mb-6 text-white">Welcome to Savage Nation USA</h2>
        <input
          type="text"
          placeholder="Search pages..."
          value={navTerm}
          onChange={(e) => setNavTerm(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleNav(navTerm)}
          className="w-full max-w-md px-4 py-2 mb-8 rounded bg-white/30 text-black"
        />
        <p>Use the sidebar to navigate.</p>
      </main>
    </div>
  );
}
