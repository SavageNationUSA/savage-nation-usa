import React, { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../Layout";
import { useAuth } from "../contexts/AuthContext.jsx";

const initialProducts = [
  { name: "Hat",    price: "$29.99" },
  { name: "T-Shirt",price: "$29.99" },
  { name: "Hoodie", price: "$29.99" },
];

export default function Store() {
  const { isAuthenticated } = useAuth();
  const [searchTerm, setSearchTerm] = useState("");
  const filtered = initialProducts.filter(p =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <Layout className="p-8 text-black">
      <h2 className="text-4xl font-bold mb-4">Our Store</h2>
      <input
        className="mb-6 px-4 py-2 border rounded w-full max-w-md"
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map(item => (
          <div key={item.name} className="border rounded-lg p-4 shadow">
            <div className="h-40 bg-gray-200 mb-4 flex items-center justify-center">
              <span className="text-gray-500">Image</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
            <p className="mb-4">{item.price}</p>
            {isAuthenticated ? (
              <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded">
                Buy Now
              </button>
            ) : (
              <Link to="/login" className="px-4 py-2 bg-gray-300 text-black rounded inline-block text-center">
                Login to Buy
              </Link>
            )}
          </div>
        ))}
      </div>
      <Link to="/landing">
        <button className="mt-8 px-6 py-3 bg-gray-300 hover:bg-gray-400 rounded-md">
          Back
        </button>
      </Link>
    </Layout>
  );
}
