import { useState } from "react";
import "./index.css";

const initialProducts = [
  { name: "Hat", price: "$29.99" },
  { name: "T-Shirt", price: "$29.99" },
  { name: "Hoodie", price: "$29.99" }
];

export default function App() {
  const [page, setPage] = useState("home");
  const [searchTerm, setSearchTerm] = useState("");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  // Home
  if (page === "home") {
    return (
      <div
        className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/bg.png')" }}
      >
        <h1 className="text-5xl font-extrabold text-white text-center">
          Savage Nation USA
        </h1>
        <p className="mt-4 text-lg font-semibold text-red-500 uppercase text-center">
          ONLY ENTER IF YOU&apos;RE SAVAGE ENOUGH
        </p>
        <button
          className="mt-6 px-8 py-4 bg-gradient-to-r from-blue-600 via-white to-red-600 text-white font-bold rounded-full shadow-lg ring-2 ring-white transition-transform hover:scale-105"
          onClick={() => setPage("landing")}
        >
          Enter Here
        </button>
      </div>
    );
  }

  // Landing
  if (page === "landing") {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white text-black p-8">
        <h2 className="text-4xl font-bold mb-6">Welcome to Savage Nation USA</h2>
        <p className="text-lg max-w-xl text-center mb-8">
          Explore our Store, About Us, Videos, Contact, and more.
        </p>
        <div className="space-x-4">
          <button
            className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-md"
            onClick={() => setPage("store")}
          >
            Store
          </button>
          <button
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md"
            onClick={() => setPage("videos")}
          >
            Videos
          </button>
          <button
            className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-md"
            onClick={() => setPage("about")}
          >
            About Us
          </button>
          <button
            className="px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white font-semibold rounded-md"
            onClick={() => setPage("contact")}
          >
            Contact Us
          </button>
        </div>
      </div>
    );
  }

  // Store
  if (page === "store") {
    const filtered = initialProducts.filter((p) =>
      p.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
      <div className="min-h-screen p-8 bg-gray-50 text-black">
        <h2 className="text-4xl font-bold mb-4">Our Store</h2>
        <input
          className="mb-6 px-4 py-2 border rounded w-full max-w-md"
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <div key={item.name} className="border rounded-lg p-4 shadow">
              <div className="h-40 bg-gray-200 mb-4 flex items-center justify-center">
                <span className="text-gray-500">Image</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
              <p className="mb-4">{item.price}</p>
              <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded">
                Buy Now
              </button>
            </div>
          ))}
        </div>
        <button
          className="mt-8 px-6 py-3 bg-gray-300 hover:bg-gray-400 text-black font-semibold rounded-md"
          onClick={() => setPage("landing")}
        >
          Back
        </button>
      </div>
    );
  }

  // Videos
  if (page === "videos") {
    const videoIds = ["VIDEO_ID_1", "VIDEO_ID_2", "VIDEO_ID_3"];
    return (
      <div className="min-h-screen p-8 bg-white text-black">
        <h2 className="text-4xl font-bold mb-6">Savage Nation Videos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {videoIds.map((id) => (
            <div key={id} className="relative pb-[56.25%]">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={`https://www.youtube.com/embed/${id}`}
                title="Savage Nation Video"
                frameBorder="0"
                allowFullScreen
              />
            </div>
          ))}
        </div>
        <button
          className="px-6 py-3 bg-gray-300 hover:bg-gray-400 text-black font-semibold rounded-md"
          onClick={() => setPage("landing")}
        >
          Back
        </button>
      </div>
    );
  }

  // About Us
  if (page === "about") {
    return (
      <div className="min-h-screen p-8 bg-white text-black">
        <h2 className="text-4xl font-bold mb-4">About Us</h2>
        <p className="mb-6 max-w-2xl">
          Savage Nation USA was founded to bring the fiercest, most unapologetic
          patriotic gear and content to the world. We believe in bold style,
          fearless expression, and building a community of true savages.
        </p>
        <button
          className="px-6 py-3 bg-gray-300 hover:bg-gray-400 text-black font-semibold rounded-md"
          onClick={() => setPage("landing")}
        >
          Back
        </button>
      </div>
    );
  }

  // Contact Us
  if (page === "contact") {
    const handleChange = (e) =>
      setForm({ ...form, [e.target.name]: e.target.value });
    const handleSubmit = (e) => {
      e.preventDefault();
      alert("Thank you, " + form.name + "! We received your message.");
      setForm({ name: "", email: "", message: "" });
      setPage("landing");
    };

    return (
      <div className="min-h-screen p-8 bg-white text-black">
        <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
        <form onSubmit={handleSubmit} className="max-w-lg space-y-4">
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Name"
            className="w-full px-4 py-2 border rounded"
            required
          />
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full px-4 py-2 border rounded"
            required
          />
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Message"
            className="w-full px-4 py-2 border rounded h-32"
            required
          />
          <button
            type="submit"
            className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-md"
          >
            Send Message
          </button>
        </form>
        <button
          className="mt-6 px-6 py-3 bg-gray-300 hover:bg-gray-400 text-black font-semibold rounded-md"
          onClick={() => setPage("landing")}
        >
          Back
        </button>
      </div>
    );
  }

  return null;
}
