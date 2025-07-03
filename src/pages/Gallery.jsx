import React from "react";
import { Link } from "react-router-dom";
import Layout from "../Layout";

const galleryItems = [
  {
    src: "/bg.png",
    alt: "Website background with U.S. flag",
  },
  {
    src:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=400&q=80",
    alt: "Silhouette of people cheering at a concert",
  },
  {
    src:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=400&q=80",
    alt: "City skyline at night",
  },
];

export default function Gallery() {
  return (
    <Layout className="p-8 text-black">
      <h2 className="text-3xl sm:text-4xl font-bold mb-6">Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryItems.map((item, i) => (
          <div key={i} className="border rounded-lg p-4 shadow">
            <img
              src={item.src}
              alt={item.alt}
              className="object-cover w-full h-40 mb-4 rounded"
            />
          </div>
        ))}
      </div>
      <Link to="/landing">
        <button className="mt-8 px-6 py-3 bg-gray-300 hover:bg-gray-400 rounded-md">Back</button>
      </Link>
    </Layout>
  );
}
