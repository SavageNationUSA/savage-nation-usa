import React from "react";
import { Link } from "react-router-dom";
import Layout from "../Layout";

export default function Mission() {
  return (
    <Layout className="p-8 text-black">
      <h2 className="text-4xl font-bold mb-4">Our Mission & Promise</h2>
      <p className="mb-6 max-w-2xl">
        [Describe your mission and promise here—what Savage Nation USA stands for, and the guarantees you make to your customers.]
      </p>
      <Link to="/landing">
        <button className="px-6 py-3 bg-gray-300 hover:bg-gray-400 rounded-md">Back</button>
      </Link>
    </Layout>
  );
}
