import React from 'react';
import { Link } from 'react-router-dom';

export default function AdminDashboard() {
  return (
    <div className="p-8 text-white">
      <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>
      <ul className="space-y-2">
        <li>
          <Link to="/product-admin" className="text-blue-400 hover:underline">
            Manage Products
          </Link>
        </li>
        <li>
          <Link to="/blog-admin" className="text-blue-400 hover:underline">
            Manage Blogs
          </Link>
        </li>
        <li>
          <Link to="/image-admin" className="text-blue-400 hover:underline">
            Manage Images
          </Link>
        </li>
      </ul>
    </div>
  );
}
