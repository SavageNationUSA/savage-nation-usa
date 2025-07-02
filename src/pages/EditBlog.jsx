import React from "react";
import Layout from "../Layout";

export default function EditBlog() {
  return (
    <Layout className="p-8 text-black">
      <h2 className="text-4xl font-bold mb-4">Edit Blog</h2>
      <p className="mb-6 max-w-2xl">
        Only administrators can access this page to create or modify blog posts.
      </p>
    </Layout>
  );
}
