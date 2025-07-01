import React from "react";
import { Link } from "react-router-dom";
import Layout from "../Layout";

export default function WeeklyBlog() {
  return (
    <Layout className="p-8 text-black">
      <h2 className="text-4xl font-bold mb-4">Weekly Blog</h2>
      <p className="mb-6 max-w-2xl">
        Read the latest updates, stories, and patriotic rants from the Savage Nation USA crew. New blogs drop every week!
      </p>
      <ul className="list-disc list-inside mb-6 max-w-2xl">
        <li>How to rock your Savage merch (7/1/2025)</li>
        <li>Why American grit matters</li>
        <li>Behind the scenes at Savage Nation USA HQ</li>
      </ul>
      <Link to="/landing">
        <button className="px-6 py-3 bg-gray-300 hover:bg-gray-400 rounded-md">Back</button>
      </Link>
    </Layout>
  );
}
