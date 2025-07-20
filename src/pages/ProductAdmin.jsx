import React, { useEffect, useState } from 'react';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { db } from '../firebase.js';
import Layout from '../Layout';

export default function ProductAdmin() {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({ name: '', price: '' });

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
    setForm({ name: '', price: '' });
    load();
  };

  return (
    <Layout className="p-8 text-black">
      <h2 className="text-2xl font-bold mb-4">Manage Products</h2>
      <form onSubmit={submit} className="space-y-2 mb-6">
        <input
          className="border p-2 rounded w-full"
          placeholder="Name"
          value={form.name}
          onChange={e => setForm({ ...form, name: e.target.value })}
        />
        <input
          className="border p-2 rounded w-full"
          placeholder="Price"
          value={form.price}
          onChange={e => setForm({ ...form, price: e.target.value })}
        />
        <button className="px-4 py-2 bg-blue-600 text-white rounded">Save</button>
      </form>
      <ul className="space-y-2">
        {products.map(p => (
          <li key={p.id} className="border p-2 rounded">
            {p.name} - {p.price}
          </li>
        ))}
      </ul>
    </Layout>
  );
}
