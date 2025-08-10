import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../assets/hero.webp';

const Hero = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <img
        src={heroImage}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white bg-black/40">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-center">
          Savage Nation USA
        </h1>
        <p className="mt-2 text-lg sm:text-xl text-center">
          Proudly supporting our Veterans
        </p>
        <Link to="/landing">
          <button className="mt-6 px-8 py-4 bg-gradient-to-r from-blue-600 via-white to-red-600 text-white font-bold rounded-full shadow-lg ring-2 ring-white transition-transform hover:scale-105">
            Enter Here
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
