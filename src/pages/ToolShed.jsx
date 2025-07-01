import React from "react";
import { Link } from "react-router-dom";
import Layout from "../Layout";

export default function ToolShed() {
  return (
    <Layout className="p-8 text-black">
      <h2 className="text-4xl font-bold mb-4">Tool Shed</h2>
      <p className="mb-6 max-w-2xl">
        Welcome to the Tool Shed! Here you’ll find resources, downloads, and custom tools built for Savage Nation USA fans.
      </p>
      <ul className="list-disc list-inside mb-6 max-w-2xl">
        <li>Downloadable wallpapers</li>
        <li>Utility apps (coming soon!)</li>
        <li>Patriotic printables</li>
      </ul>
      <Link to="/landing">
        <button className="px-6 py-3 bg-gray-300 hover:bg-gray-400 rounded-md">Back</button>
      </Link>
    </Layout>
  );
}
