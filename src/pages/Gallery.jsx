import React from "react";
import { Link } from "react-router-dom";
import Layout from "../Layout";

const galleryItems = [
  { title: "Gallery Image 1" },
  { title: "Gallery Image 2" },
  { title: "Gallery Image 3" },
];

export default function Gallery() {
  return (
    <Layout className="p-8 text-black">
      <h2 className="text-4xl font-bold mb-6">Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryItems.map((item, i) => (
          <div key={i} className="border rounded-lg p-4 shadow">
            <div className="h-40 bg-gray-200 mb-4 flex items-center justify-center">
              <span className="text-gray-500">{item.title}</span>
            </div>
          </div>
        ))}
      </div>
      <Link to="/landing">
        <button className="mt-8 px-6 py-3 bg-gray-300 hover:bg-gray-400 rounded-md">Back</button>
      </Link>
    </Layout>
  );
}
