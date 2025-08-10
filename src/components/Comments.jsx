import React, { useEffect, useState } from 'react';
import { collection, addDoc, getDocs, query, where } from 'firebase/firestore';
import { useAuth } from '../contexts/AuthContext.jsx';
import { db } from '../firebase.js';

export default function Comments({ postId }) {
  const { isAuthenticated } = useAuth();
  const [text, setText] = useState('');
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const load = async () => {
      const q = query(collection(db, 'comments'), where('postId', '==', postId));
      const snap = await getDocs(q);
      setComments(snap.docs.map(d => ({ id: d.id, ...d.data() })));
    };
    load();
  }, [postId]);

  const submit = async e => {
    e.preventDefault();
    await addDoc(collection(db, 'comments'), { postId, text });
    setText('');
    const q = query(collection(db, 'comments'), where('postId', '==', postId));
    const snap = await getDocs(q);
    setComments(snap.docs.map(d => ({ id: d.id, ...d.data() })));
  };

  return (
    <div className="mt-2">
      <ul className="space-y-1">
        {comments.map(c => (
          <li key={c.id} className="border border-gray-300 p-1 rounded">
            {c.text}
          </li>
        ))}
      </ul>
      {isAuthenticated && (
        <form onSubmit={submit} className="mt-2 flex space-x-2">
          <input
            className="border border-gray-300 p-1 flex-1 rounded"
            value={text}
            onChange={e => setText(e.target.value)}
          />
          <button className="px-2 bg-blue-600 text-white rounded">Add</button>
        </form>
      )}
    </div>
  );
}
