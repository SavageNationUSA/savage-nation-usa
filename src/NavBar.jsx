import React from "react";
import { Link } from "react-router-dom";

const links = [
  { to: "/landing", label: "Home" },
  { to: "/store", label: "Store" },
  { to: "/videos", label: "Videos" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
  { to: "/gallery", label: "Gallery" },
  { to: "/faq", label: "FAQ" },
  { to: "/story", label: "Story" },
  { to: "/charities", label: "Charities" },
  { to: "/mission", label: "Mission" },
  { to: "/toolshed", label: "Tool Shed" },
  { to: "/weeklyblog", label: "Weekly Blog" },
];

export default function NavBar() {
  return (
    <nav className="absolute top-0 left-0 w-full bg-black/70 text-white px-4 py-2 flex flex-wrap justify-center gap-4 z-10">
      {links.map((link) => (
        <Link key={link.to} to={link.to} className="hover:underline">
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
