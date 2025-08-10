import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../Layout';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase.js';

export default function Store() {
  const [searchTerm, setSearchTerm] = useState('');
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const load = async () => {
      const snap = await getDocs(collection(db, 'products'));
      setProducts(snap.docs.map(d => ({ id: d.id, ...d.data() })));
    };
    load();
  }, []);
  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <Layout className="p-12 text-black">
      <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Store</h2>
      <input
        className="mb-6 px-4 py-2 border border-gray-300 rounded w-full max-w-md placeholder-black/50"
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map(item => (
          <div key={item.id} className="bg-white rounded-lg p-6 flex flex-col">
            <div className="h-40 bg-gray-200 mb-4 flex items-center justify-center">
              <span className="text-gray-500">Image</span>
            </div>
            <h3 className="text-lg font-semibold mb-2 text-center">{item.name}</h3>
            <p className="mb-4 text-center">{item.price}</p>
            <button className="mt-auto px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded">
              Buy Now
            </button>
          </div>
        ))}
      </div>
      <Link to="/landing">
        <button className="mt-8 px-6 py-3 bg-gray-300 hover:bg-gray-400 rounded-md">
          Back
        </button>
      </Link>
    </Layout>
  );
}
