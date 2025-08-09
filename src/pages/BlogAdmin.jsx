import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { collection, addDoc, getDocs, updateDoc, doc } from 'firebase/firestore';
import { db } from '../firebase.js';
import ImageGallery from '@/components/ImageGallery';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

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
        <Input
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Title"
        />
        <Input
          name="date"
          value={form.date}
          onChange={handleChange}
          placeholder="Date"
        />
        <div className="relative">
          <Textarea
            name="content"
            value={form.content}
            onChange={handleChange}
            placeholder="Content (Markdown supported)"
            rows="10"
          />
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={() => setShowGallery(true)}
            className="absolute top-2 right-2"
          >
            Select Image
          </Button>
        </div>
        <Button type="submit">
          {editingId === null ? "Add Post" : "Save Post"}
        </Button>
        {editingId !== null && (
          <Button
            type="button"
            variant="secondary"
            onClick={() => {
              setEditingId(null);
              setForm({ title: "", date: "", content: "" });
            }}
          >
            Cancel
          </Button>
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
            <Button variant="outline" size="sm" onClick={() => handleEdit(post)}>
              Edit
            </Button>
          </li>
        ))}
      </ul>
      <Link to="/weeklyblog" className="block mt-8">
        <Button variant="outline">Back to Blog</Button>
      </Link>

      {showGallery && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-gray-800 p-4 rounded-lg max-w-3xl w-full">
            <h3 className="text-xl font-bold mb-4">Select an Image</h3>
            <ImageGallery onSelectImage={handleSelectImage} />
            <Button
              variant="destructive"
              onClick={() => setShowGallery(false)}
              className="mt-4"
            >
              Close
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
