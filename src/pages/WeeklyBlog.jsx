import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../Layout";
import { loadPosts } from "../blogStorage";

export default function WeeklyBlog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setPosts(loadPosts());
  }, []);

  return (
    <Layout className="p-8 text-black">
      <h2 className="text-4xl font-bold mb-4">Weekly Blog</h2>
      <p className="mb-6 max-w-2xl">
        Read the latest updates, stories, and patriotic rants from the Savage Nation USA crew. New blogs drop every week!
      </p>
      <ul className="list-disc list-inside mb-6 max-w-2xl">
        {posts.map((post) => (
          <li key={post.id} className="mb-4">
            <h4 className="font-semibold">
              {post.title} {post.date && `(${post.date})`}
            </h4>
            {post.content && (
              <p className="whitespace-pre-wrap text-sm mt-1">{post.content}</p>
            )}
          </li>
        ))}
      </ul>
      <Link to="/landing">
        <button className="px-6 py-3 bg-gray-300 hover:bg-gray-400 rounded-md">Back</button>
      </Link>
    </Layout>
  );
}
