import React, { useEffect, useState } from 'react';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { db } from '../firebase.js';
import ImageGallery from '../components/ImageGallery';

export default function ProductAdmin() {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({ name: '', price: '', imageUrl: '' });
  const [showGallery, setShowGallery] = useState(false);

  useEffect(() => {
    load();
  }, []);

  const load = async () => {
    const snap = await getDocs(collection(db, 'products'));
    setProducts(snap.docs.map(d => ({ id: d.id, ...d.data() })));
  };

  const submit = async e => {
    e.preventDefault();
    await addDoc(collection(db, 'products'), form);
    setForm({ name: '', price: '', imageUrl: '' });
    load();
  };

  const handleSelectImage = (url) => {
    setForm((f) => ({ ...f, imageUrl: url }));
    setShowGallery(false);
  };

  return (
    <div className="p-8 text-white bg-gray-900 min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Manage Products</h2>
      <form onSubmit={submit} className="space-y-2 mb-6">
        <input
          className="border p-2 rounded w-full bg-gray-800 text-white"
          placeholder="Name"
          value={form.name}
          onChange={e => setForm({ ...form, name: e.target.value })}
        />
        <input
          className="border p-2 rounded w-full bg-gray-800 text-white"
          placeholder="Price"
          value={form.price}
          onChange={e => setForm({ ...form, price: e.target.value })}
        />
        <div className="flex items-center space-x-2">
          <input
            className="border p-2 rounded w-full bg-gray-800 text-white"
            placeholder="Image URL"
            value={form.imageUrl}
            readOnly
          />
          <button
            type="button"
            onClick={() => setShowGallery(true)}
            className="px-4 py-2 bg-blue-600 text-white rounded"
          >
            Select Image
          </button>
        </div>
        <button className="px-4 py-2 bg-blue-600 text-white rounded">Save</button>
      </form>
      <ul className="space-y-2">
        {products.map(p => (
          <li key={p.id} className="border p-2 rounded bg-gray-800 flex items-center space-x-4">
            {p.imageUrl && <img src={p.imageUrl} alt={p.name} className="w-16 h-16 object-cover rounded" />}
            <span>{p.name} - {p.price}</span>
          </li>
        ))}
      </ul>
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
