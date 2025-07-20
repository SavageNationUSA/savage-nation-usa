import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../Layout';

export default function AdminDashboard() {
  return (
    <Layout className="p-8 text-black">
      <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>
      <ul className="space-y-2">
        <li>
          <Link to="/product-admin" className="text-blue-600 underline">
            Manage Products
          </Link>
        </li>
        <li>
          <Link to="/blog-admin" className="text-blue-600 underline">
            Manage Blogs
          </Link>
        </li>
      </ul>
    </Layout>
  );
}
