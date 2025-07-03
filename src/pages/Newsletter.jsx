import React, { useState } from "react";
import Layout from "../Layout";
import { useAuth } from "../contexts/AuthContext.jsx";

export default function Newsletter() {
  const { isAuthenticated } = useAuth();
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setMsg(`Thanks for signing up, ${email}!`);
    setEmail("");
  };

  if (!isAuthenticated) {
    return (
      <Layout className="p-8 text-black">
        <p>Please login to subscribe to our newsletter.</p>
      </Layout>
    );
  }

  return (
    <Layout className="p-8 text-black">
      <h2 className="text-4xl font-bold mb-4">Newsletter Signup</h2>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4 max-w-xs">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-2 border rounded"
          required
        />
        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">
          Subscribe
        </button>
        {msg && <p className="text-green-600">{msg}</p>}
      </form>
    </Layout>
  );
}
