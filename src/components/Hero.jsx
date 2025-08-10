import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <img
        src="/bg.png"
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
          <Button size="lg" className="mt-8">
            Enter Here
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
