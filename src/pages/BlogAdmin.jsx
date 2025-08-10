import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { collection, addDoc, getDocs, updateDoc, doc } from 'firebase/firestore';
import { db } from '../firebase.js';
import ImageGallery from '../components/ImageGallery';

export default function BlogAdmin() {
  const [posts, setPosts] = useState([]);
  const [form, setForm] = useState({ title: "", date: "", content: "" });
  const [editingId, setEditingId] = useState(null);
  const [showGallery, setShowGallery] = useState(false);

  useEffect(() => {
    const load = async () => {
      const snap = await getDocs(collection(db, 'posts'));
      setPosts(snap.docs.map(d => ({ id: d.id, ...d.data() })));
    };
    load();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleEdit = (post) => {
    setEditingId(post.id);
    setForm({ title: post.title, date: post.date || "", content: post.content || "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editingId === null) {
      await addDoc(collection(db, 'posts'), form);
    } else {
      await updateDoc(doc(db, 'posts', editingId), form);
      setEditingId(null);
    }
    const snap = await getDocs(collection(db, 'posts'));
    setPosts(snap.docs.map(d => ({ id: d.id, ...d.data() })));
    setForm({ title: '', date: '', content: '' });
  };

  const handleSelectImage = (url) => {
    setForm((f) => ({ ...f, content: f.content + `\n![Image](${url})\n` }));
    setShowGallery(false);
  };

  return (
    <div className="p-8 text-white bg-gray-900 min-h-screen">
      <h2 className="text-2xl sm:text-3xl font-bold mb-4">Blog Admin</h2>
      <form onSubmit={handleSubmit} className="space-y-3 mb-6 max-w-md">
        <input
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Title"
          className="w-full p-2 border rounded bg-gray-800 text-white"
        />
        <input
          name="date"
          value={form.date}
          onChange={handleChange}
          placeholder="Date"
          className="w-full p-2 border rounded bg-gray-800 text-white"
        />
        <div className="relative">
          <textarea
            name="content"
            value={form.content}
            onChange={handleChange}
            placeholder="Content (Markdown supported)"
            className="w-full p-2 border rounded bg-gray-800 text-white"
            rows="10"
          />
          <button
            type="button"
            onClick={() => setShowGallery(true)}
            className="absolute top-2 right-2 px-2 py-1 bg-blue-600 text-white rounded text-sm"
          >
            Select Image
          </button>
        </div>
        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">
          {editingId === null ? "Add Post" : "Save Post"}
        </button>
        {editingId !== null && (
          <button
            type="button"
            onClick={() => {
              setEditingId(null);
              setForm({ title: "", date: "", content: "" });
            }}
            className="ml-2 px-4 py-2 bg-gray-300 rounded"
          >
            Cancel
          </button>
        )}
      </form>
      <ul className="space-y-2 max-w-xl">
        {posts.map((post) => (
          <li key={post.id} className="border p-3 rounded flex justify-between items-start bg-gray-800">
            <div className="flex-1 mr-4">
              <h4 className="font-semibold">
                {post.title}{" "}
                {post.date && <span className="text-sm text-gray-400">({post.date})</span>}
              </h4>
              {post.content && (
                <p className="text-sm mt-1 whitespace-pre-wrap">{post.content}</p>
              )}
            </div>
            <button onClick={() => handleEdit(post)} className="px-2 py-1 bg-green-600 text-white rounded">
              Edit
            </button>
          </li>
        ))}
      </ul>
      <Link to="/weeklyblog" className="block mt-8">
        <button className="px-6 py-3 bg-gray-300 hover:bg-gray-400 rounded-md text-black">Back to Blog</button>
      </Link>

      {showGallery && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-gray-800 p-4 rounded-lg max-w-3xl w-full">
            <h3 className="text-xl font-bold mb-4">Select an Image</h3>
            <ImageGallery onSelectImage={handleSelectImage} />
            <button
              onClick={() => setShowGallery(false)}
              className="mt-4 px-4 py-2 bg-red-600 text-white rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
