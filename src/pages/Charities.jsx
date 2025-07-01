import React from "react";
import { Link } from "react-router-dom";
import Layout from "../Layout";

export default function Charities() {
  return (
    <Layout className="p-8 text-black">
      <h2 className="text-4xl font-bold mb-4">Our Supported Charities</h2>
      <ul className="list-disc list-inside mb-6 max-w-2xl">
        <li>Charity A – Supports veterans and their families.</li>
        <li>Charity B – Provides tactical gear to first responders.</li>
        <li>Charity C – Funds wilderness rehabilitation programs.</li>
      </ul>
      <Link to="/landing">
        <button className="px-6 py-3 bg-gray-300 hover:bg-gray-400 rounded-md">Back</button>
      </Link>
    </Layout>
  );
}
