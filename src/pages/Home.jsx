import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";

export default function Home() {
  return (
    <div
      className="relative min-h-screen flex flex-col items-center justify-center bg-cover bg-center text-white p-4"
      style={{ backgroundImage: "url('/bg.png')" }}
    >
      <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-center tracking-tight">
        Savage Nation USA
      </h1>
      <p className="mt-4 text-lg sm:text-xl text-center text-blue-200">
        Proudly supporting our Veterans
      </p>
      <p className="mt-6 text-lg sm:text-xl font-bold text-red-500 uppercase text-center tracking-wider">
        ONLY ENTER IF YOU'RE SAVAGE ENOUGH
      </p>
      <Link to="/landing">
        <Button size="lg" className="mt-8">
          Enter Here
        </Button>
      </Link>
    </div>
  );
}
