import React, { useEffect, useState } from 'react';
import { Search } from 'lucide-react';
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
    <Layout className="p-16 text-black">
      <div className="relative w-full max-w-md mx-auto mb-12">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
        <input
          className="bg-gray-100 border-none rounded-full w-full py-3 pl-10 pr-4 text-center placeholder-gray-500"
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map(item => (
          <div key={item.id} className="bg-white rounded-lg flex flex-col items-center text-center transition-shadow duration-300 hover:shadow-xl overflow-hidden">
            <div className="h-64 w-full bg-gray-100 flex items-center justify-center">
              {/* Placeholder for product image */}
            </div>
            <div className="p-8">
              <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
              <p className="text-gray-500 mb-4">{item.price}</p>
              <button className="mt-auto px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-sm">
                Buy
              </button>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}
