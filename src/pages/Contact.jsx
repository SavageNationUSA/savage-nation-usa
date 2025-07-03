import React, { useState } from "react";
import Layout from "../Layout";

export default function Contact() {
  const [form, setForm] = useState({ name:"", email:"", message:"" });
  const handleChange = e => setForm({...form,[e.target.name]:e.target.value});
  const handleSubmit = e => {
    e.preventDefault();
    alert("Thank you, " + form.name + "! We received your message.");
    setForm({ name:"", email:"", message:"" });
  };

  return (
    <Layout className="p-8 text-black">
      <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
      <form onSubmit={handleSubmit} className="max-w-lg space-y-4">
        <input name="name" value={form.name} onChange={handleChange} placeholder="Name"
               className="w-full px-4 py-2 border rounded" required />
        <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Email"
               className="w-full px-4 py-2 border rounded" required />
        <textarea name="message" value={form.message} onChange={handleChange} placeholder="Message"
                  className="w-full px-4 py-2 border rounded h-32" required />
        <button type="submit" className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-md">
          Send Message
        </button>
      </form>
    </Layout>
  );
}
