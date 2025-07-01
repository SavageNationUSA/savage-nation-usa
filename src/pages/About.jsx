import React from "react";
import { Link } from "react-router-dom";
import Layout from "../Layout";

export default function About() {
  return (
    <Layout className="p-8 text-black">
      <h2 className="text-4xl font-bold mb-4">About Us</h2>
      <p className="mb-6 max-w-2xl">
        Savage Nation USA was founded to bring the fiercest, most unapologetic patriotic gear to the world.
      </p>
      <Link to="/landing">
        <button className="px-6 py-3 bg-gray-300 hover:bg-gray-400 rounded-md">Back</button>
      </Link>
    </Layout>
  );
}
