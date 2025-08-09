import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';

const pages = [
  { key: 'landing', label: 'Home' },
  { key: 'store', label: 'Store', icon: ShoppingCart },
  { key: 'videos', label: 'Videos' },
  { key: 'about', label: 'About' },
  { key: 'contact', label: 'Contact' },
  { key: 'gallery', label: 'Gallery' },
  { key: 'faq', label: 'FAQ' },
  { key: 'story', label: 'Story' },
  { key: 'charities', label: 'Charities' },
  { key: 'mission', label: 'Mission' },
  { key: 'toolshed', label: 'ToolShed' },
  { key: 'weeklyblog', label: 'Blog' }
];

const Navbar = () => {
  return (
    <nav className="bg-black bg-opacity-70 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/landing" className="text-2xl font-bold">
          Savage Nation USA
        </Link>
        <div className="hidden md:flex space-x-4">
          {pages.map((page) => (
            <NavLink
              key={page.key}
              to={`/${page.key}`}
              className={({ isActive }) =>
                `flex items-center px-3 py-2 rounded transition ${
                  isActive ? 'bg-white/20' : 'hover:bg-white/20'
                }`
              }
            >
              {page.icon && <page.icon className="w-5 h-5 mr-2" />}
              {page.label}
            </NavLink>
          ))}
        </div>
        {/* Mobile menu button */}
        <div className="md:hidden">
            <button>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
            </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
