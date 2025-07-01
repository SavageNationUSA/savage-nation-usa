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
];

export default function Landing() {
  const navigate = useNavigate();
  const [navTerm, setNavTerm] = useState("");

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[url('/bg.png')] bg-cover bg-center text-black p-8">
      <h2 className="text-4xl font-bold mb-4">Welcome to Savage Nation USA</h2>
      <input
        className="mb-6 px-4 py-2 border rounded w-full max-w-md"
        type="text"
        placeholder="Search pages..."
        value={navTerm}
        onChange={(e) => setNavTerm(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            const val = e.target.value.toLowerCase();
            if (pages.includes(val)) navigate("/" + val);
            else alert("Page not found: " + val);
          }
        }}
      />
      <p className="text-lg max-w-xl text-center mb-8">
        Or click a button below to navigate.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        {pages.map((p) => (
          <button
            key={p}
            className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-md"
            onClick={() => navigate("/" + p)}
          >
            {p.charAt(0).toUpperCase() + p.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
}
