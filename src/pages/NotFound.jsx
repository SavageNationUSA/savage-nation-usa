import React from "react";
import { Link } from "react-router-dom";
import Layout from "../Layout";

export default function NotFound() {
  return (
    <Layout className="p-8 text-black text-center">
      <h2 className="text-4xl font-bold mb-4">404 - Page Not Found</h2>
      <p className="mb-6">The page you are looking for does not exist.</p>
      <Link to="/">
        <button className="px-6 py-3 bg-gray-300 hover:bg-gray-400 rounded-md">Go Home</button>
      </Link>
    </Layout>
  );
}
