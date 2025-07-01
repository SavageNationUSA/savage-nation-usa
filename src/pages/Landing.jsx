import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const pages = [
  "store",
  "videos",
  "about",
  "contact",
  "gallery",
  "faq",
  "story",
  "charities",
  "mission",
  "toolshed",
  "weeklyblog"
];

export default function Landing() {
  const navigate = useNavigate();
  const [navTerm, setNavTerm] = useState("");

  const handleNav = (term) => {
    const page = term.toLowerCase().trim();
    if (pages.includes(page)) {
      navigate("/" + page);
    } else {
      alert("Page not found: " + page);
    }
    setNavTerm("");
  };

  return (
    <div className="min-h-screen flex bg-[url('/bg.png')] bg-cover bg-center">
      <aside className="w-64 bg-gray-800 bg-opacity-80 p-6 flex flex-col space-y-4">
        <h3 className="text-xl font-bold text-white">Navigation</h3>
        {pages.map((p) => (
          <button
            key={p}
            className="text-left px-4 py-2 text-white hover:bg-gray-700 rounded"
            onClick={() => handleNav(p)}
          >
            {p.charAt(0).toUpperCase() + p.slice(1)}
          </button>
        ))}
      </aside>
      <main className="flex-1 p-8 bg-white bg-opacity-70 text-black">
        <h2 className="text-4xl font-bold mb-4">Welcome to Savage Nation USA</h2>
        <input
          className="mb-6 px-4 py-2 border rounded w-full max-w-lg"
          type="text"
          placeholder="Search pages..."
          value={navTerm}
          onChange={(e) => setNavTerm(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleNav(navTerm)}
        />
        <p className="text-lg max-w-xl">
          Use the sidebar to navigate through the site.
        </p>
      </main>
    </div>
  );
}
