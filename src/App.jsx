import { useState } from "react";
import "./index.css";

const initialProducts = [
  { name: "Hat", price: "$29.99" },
  { name: "T-Shirt", price: "$29.99" },
  { name: "Hoodie", price: "$29.99" },
];

const galleryItems = [
  { title: "Gallery Image 1" },
  { title: "Gallery Image 2" },
  { title: "Gallery Image 3" },
];

const faqItems = [
  { question: "What is Savage Nation USA?", answer: "Your fierce, patriotic brand." },
  { question: "How do I order merch?", answer: "Head to the Store page and click Buy Now." },
  { question: "How can I get in touch?", answer: "Use the Contact Us form." },
];

export default function App() {
  const [page, setPage] = useState("home");
  const [searchTerm, setSearchTerm] = useState("");
  const [navTerm, setNavTerm] = useState("");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleNav = () => {
    const t = navTerm.toLowerCase().trim();
    if (t.includes("store") || t.includes("merch")) setPage("store");
    else if (t.includes("video")) setPage("videos");
    else if (t.includes("about")) setPage("about");
    else if (t.includes("contact")) setPage("contact");
    else if (t.includes("gallery")) setPage("gallery");
    else if (t.includes("faq")) setPage("faq");
    else if (t.includes("story")) setPage("story");
    else if (t.includes("charity")) setPage("charities");
    else alert("Page not found: " + navTerm);
    setNavTerm("");
  };

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

  if (page === "landing") {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white text-black p-8">
        <h2 className="text-4xl font-bold mb-4">Welcome to Savage Nation USA</h2>
        <input
          className="mb-6 px-4 py-2 border rounded w-full max-w-md"
          type="text"
          placeholder="Search pages..."
          value={navTerm}
          onChange={(e) => setNavTerm(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), handleNav())}
        />
        <p className="text-lg max-w-xl text-center mb-8">
          Or click a button below to navigate.
        </p>
        <div className="space-x-4 flex flex-wrap justify-center">
          <button className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-md" onClick={() => setPage("store")}>Store</button>
          <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md" onClick={() => setPage("videos")}>Videos</button>
          <button className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-md" onClick={() => setPage("about")}>About Us</button>
          <button className="px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white rounded-md" onClick={() => setPage("contact")}>Contact Us</button>
          <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-md" onClick={() => setPage("gallery")}>Gallery</button>
          <button className="px-6 py-3 bg-yellow-600 hover:bg-yellow-700 text-white rounded-md" onClick={() => setPage("faq")}>FAQ</button>
          <button className="px-6 py-3 bg-pink-600 hover:bg-pink-700 text-white rounded-md" onClick={() => setPage("story")}>Our Story</button>
          <button className="px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-md" onClick={() => setPage("charities")}>Charities</button>
        </div>
      </div>
    );
  }

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
        <button className="mt-8 px-6 py-3 bg-gray-300 hover:bg-gray-400 rounded-md" onClick={() => setPage("landing")}>Back</button>
      </div>
    );
  }

  if (page === "videos") {
    const videoIds = ["YQt8q8VrNbw", "QssmhbtA_g0", "vooONATHNfo"];
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
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ))}
        </div>
        <button className="px-6 py-3 bg-gray-300 hover:bg-gray-400 rounded-md" onClick={() => setPage("landing")}>Back</button>
      </div>
    );
  }

  if (page === "about") {
    return (
      <div className="min-h-screen p-8 bg-white text-black">
        <h2 className="text-4xl font-bold mb-4">About Us</h2>
        <p className="mb-6 max-w-2xl">
          Savage Nation USA was founded to bring the fiercest, most unapologetic patriotic gear to the world.
        </p>
        <button className="px-6 py-3 bg-gray-300 hover:bg-gray-400 rounded-md" onClick={() => setPage("landing")}>Back</button>
      </div>
    );
  }

  if (page === "contact") {
    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
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
          <input name="name" value={form.name} onChange={handleChange} placeholder="Name" className="w-full px-4 py-2 border rounded" required />
          <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Email" className="w-full px-4 py-2 border rounded" required />
          <textarea name="message" value={form.message} onChange={handleChange} placeholder="Message" className="w-full px-4 py-2 border rounded h-32" required />
          <button type="submit" className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-md">Send Message</button>
        </form>
        <button className="mt-6 px-6 py-3 bg-gray-300 hover:bg-gray-400 rounded-md" onClick={() => setPage("landing")}>Back</button>
      </div>
    );
  }

  if (page === "gallery") {
    return (
      <div className="min-h-screen p-8 bg-white text-black">
        <h2 className="text-4xl font-bold mb-6">Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <div key={item.title} className="border rounded-lg p-4 shadow">
              <div className="h-40 bg-gray-200 mb-4 flex items-center justify-center">
                <span className="text-gray-500">{item.title}</span>
              </div>
            </div>
          ))}
        </div>
        <button className="mt-8 px-6 py-3 bg-gray-300 hover:bg-gray-400 rounded-md" onClick={() => setPage("landing")}>Back</button>
      </div>
    );
  }

  if (page === "faq") {
    return (
      <div className="min-h-screen p-8 bg-white text-black">
        <h2 className="text-4xl font-bold mb-6">FAQ</h2>
        <div className="space-y-4 max-w-2xl">
          {faqItems.map((item, idx) => (
            <div key={idx}>
              <h3 className="font-semibold">{item.question}</h3>
              <p className="mb-4">{item.answer}</p>
            </div>
          ))}
        </div>
        <button className="mt-8 px-6 py-3 bg-gray-300 hover:bg-gray-400 rounded-md" onClick={() => setPage("landing")}>Back</button>
      </div>
    );
  }

  if (page === "story") {
    return (
      <div className="min-h-screen p-8 bg-white text-black">
        <h2 className="text-4xl font-bold mb-4">Our Story</h2>
        <p className="mb-6 max-w-2xl">
          [Your brand’s story goes here—how Savage Nation USA came to be, your mission, and your journey.]
        </p>
        <button className="px-6 py-3 bg-gray-300 hover:bg-gray-400 rounded-md" onClick={() => setPage("landing")}>Back</button>
      </div>
    );
  }

  if (page === "charities") {
    return (
      <div className="min-h-screen p-8 bg-white text-black">
        <h2 className="text-4xl font-bold mb-4">Our Supported Charities</h2>
        <ul className="list-disc list-inside mb-6 max-w-2xl">
          <li>Charity A – Supports veterans and their families.</li>
          <li>Charity B – Provides tactical gear to first responders.</li>
          <li>Charity C – Funds wilderness rehabilitation programs.</li>
        </ul>
        <button className="px-6 py-3 bg-gray-300 hover:bg-gray-400 rounded-md" onClick={() => setPage("landing")}>Back</button>
      </div>
    );
  }

  return null;
}
