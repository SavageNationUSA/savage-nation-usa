import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="section bg-black bg-opacity-70 text-white">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-4 mb-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
            <Facebook />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
            <Twitter />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
            <Instagram />
          </a>
        </div>
        <div className="mb-4">
          <Link to="/about" className="mx-2 hover:underline">About Us</Link>
          <Link to="/contact" className="mx-2 hover:underline">Contact</Link>
          <Link to="/faq" className="mx-2 hover:underline">FAQ</Link>
        </div>
        <p>&copy; {new Date().getFullYear()} Savage Nation USA. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
