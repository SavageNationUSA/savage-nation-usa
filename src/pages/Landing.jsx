import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import FadeInSection from "../components/FadeInSection";

const pages = [
  { key: "store",      label: "Store",      icon: ShoppingCart },
  "videos","about","contact","gallery",
  "faq","story","charities","mission","toolshed","weeklyblog"
];

export default function Landing() {
  const navigate = useNavigate();
  const [navTerm, setNavTerm] = useState("");

  const handleNav = (term) => {
    const page = term.toLowerCase().trim();
    if (Array.isArray(pages) ? pages.some((p) => (typeof p === "object" ? p.key : p) === page) : false) {
      navigate("/" + page);
    }
    setNavTerm("");
  };

  return (
    <div className="min-h-screen flex flex-col sm:flex-row bg-[url('/bg.png')] bg-cover bg-center text-white">
      <FadeInSection className="w-full sm:w-64">
        <aside className="w-full bg-black bg-opacity-70 p-6">
          <h3 className="text-xl sm:text-2xl font-bold mb-4">Navigation</h3>
          <nav className="flex flex-col space-y-2">
            {pages.map((p) => {
              const key = typeof p === "object" ? p.key : p;
              const label = typeof p === "object" ? p.label : p.charAt(0).toUpperCase()+p.slice(1);
              const Icon  = typeof p === "object" ? p.icon : null;
              return (
                <button
                  key={key}
                  onClick={() => handleNav(key)}
                  className="flex items-center px-4 py-2 rounded transition-all duration-300 hover:bg-white/20 hover:translate-x-1 hover:opacity-90 motion-reduce:transition-none motion-reduce:transform-none"
                >
                  {Icon && <Icon className="w-5 h-5 mr-2" />}
                  {label}
                </button>
              );
            })}
          </nav>
        </aside>
      </FadeInSection>
      <main className="flex-1 p-6 sm:p-10 overflow-y-auto">
        <FadeInSection>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">Welcome to Savage Nation USA</h2>
        </FadeInSection>
        <input
          type="text"
          placeholder="Search pages..."
          value={navTerm}
          onChange={(e) => setNavTerm(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleNav(navTerm)}
          className="w-full max-w-md px-4 py-2 mb-8 rounded bg-white/30 text-black placeholder-black/50"
        />
        <p>Use the sidebar to navigate.</p>
      </main>
    </div>
  );
}
