import React from "react";
import { Link } from "react-router-dom";
import Layout from "../Layout";

export default function Home() {
  return (
    <Layout className="text-white">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-center">
        Savage Nation USA
      </h1>
      <p className="mt-2 text-center text-blue-200">Proudly supporting our Veterans</p>
      <p className="mt-4 text-base sm:text-lg font-semibold text-red-500 uppercase text-center">
        ONLY ENTER IF YOU&apos;RE SAVAGE ENOUGH
      </p>
      <Link to="/landing">
        <button className="mt-6 px-8 py-4 bg-gradient-to-r from-blue-600 via-white to-red-600 text-white font-bold rounded-full shadow-lg ring-2 ring-white transition-transform hover:scale-105">
          Enter Here
        </button>
      </Link>
    </Layout>
  );
}
