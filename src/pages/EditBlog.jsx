import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../Layout";
import { loadPosts, savePosts } from "../blogStorage";

export default function EditBlog() {
  const [posts, setPosts] = useState([]);
  const [form, setForm] = useState({ title: "", date: "", content: "" });
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    setPosts(loadPosts());
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleEdit = (post) => {
    setEditingId(post.id);
    setForm({ title: post.title, date: post.date || "", content: post.content || "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingId === null) {
      const newPost = { ...form, id: Date.now() };
      const updated = [...posts, newPost];
      setPosts(updated);
      savePosts(updated);
    } else {
      const updated = posts.map((p) =>
        p.id === editingId ? { ...p, ...form } : p
      );
      setPosts(updated);
      savePosts(updated);
      setEditingId(null);
    }
    setForm({ title: "", date: "", content: "" });
  };

  return (
    <Layout className="p-8 text-black overflow-y-auto" style={{ minHeight: "100vh" }}>
      <h2 className="text-2xl sm:text-3xl font-bold mb-4">Edit Blog</h2>
      <form onSubmit={handleSubmit} className="space-y-3 mb-6 max-w-md">
        <input
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Title"
          className="w-full p-2 border rounded"
        />
        <input
          name="date"
          value={form.date}
          onChange={handleChange}
          placeholder="Date"
          className="w-full p-2 border rounded"
        />
        <textarea
          name="content"
          value={form.content}
          onChange={handleChange}
          placeholder="Content"
          className="w-full p-2 border rounded"
        />
        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">
          {editingId === null ? "Add Post" : "Save Post"}
        </button>
        {editingId !== null && (
          <button
            type="button"
            onClick={() => { setEditingId(null); setForm({ title: "", date: "", content: "" }); }}
            className="ml-2 px-4 py-2 bg-gray-300 rounded"
          >
            Cancel
          </button>
        )}
      </form>
      <ul className="space-y-2 max-w-xl">
        {posts.map((post) => (
          <li
            key={post.id}
            className="border p-3 rounded flex justify-between items-start"
          >
            <div className="flex-1 mr-4">
              <h4 className="font-semibold">
                {post.title}{" "}
                {post.date && (
                  <span className="text-sm text-gray-600">({post.date})</span>
                )}
              </h4>
              {post.content && (
                <p className="text-sm mt-1 whitespace-pre-wrap">{post.content}</p>
              )}
            </div>
            <button
              onClick={() => handleEdit(post)}
              className="px-2 py-1 bg-green-600 text-white rounded"
            >
              Edit
            </button>
          </li>
        ))}
      </ul>
      <Link to="/weeklyblog" className="block mt-8">
        <button className="px-6 py-3 bg-gray-300 hover:bg-gray-400 rounded-md">Back to Blog</button>
      </Link>
    </Layout>
  );
}
