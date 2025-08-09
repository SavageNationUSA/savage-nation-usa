import React, { useEffect, useState } from 'react';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { db } from '../firebase.js';
import ImageGallery from '@/components/ImageGallery';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

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
        <Input
          placeholder="Name"
          value={form.name}
          onChange={e => setForm({ ...form, name: e.target.value })}
        />
        <Input
          placeholder="Price"
          value={form.price}
          onChange={e => setForm({ ...form, price: e.target.value })}
        />
        <div className="flex items-center space-x-2">
          <Input
            placeholder="Image URL"
            value={form.imageUrl}
            readOnly
          />
          <Button
            type="button"
            onClick={() => setShowGallery(true)}
          >
            Select Image
          </Button>
        </div>
        <Button>Save</Button>
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
