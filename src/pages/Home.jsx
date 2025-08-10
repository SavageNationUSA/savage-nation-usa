import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div
      className="relative min-h-screen flex flex-col items-center justify-center bg-cover bg-center text-white p-8 sm:p-16"
      style={{ backgroundImage: "url('/bg.png')" }}
    >
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-center">
        Savage Nation USA
      </h1>
      <p className="mt-.5 text-center text-blue-200">
        Proudly supporting our Veterans
      </p>
      <p className="mt-4 text-base sm:text-lg font-semibold text-red-500 uppercase text-center">
        ONLY ENTER IF YOU&apos;RE SAVAGE ENOUGH
      </p>
      <Link to="/landing">
        <button
          className="mt-6 px-8 py-4 font-bold rounded-full transition-transform hover:scale-105"
          style={{ backgroundColor: "var(--color-primary)" }}
        >
          Enter Here
        </button>
      </Link>
    </div>
  );
}
