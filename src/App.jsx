import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./Layout";
import Home from "./pages/Home";
import Landing from "./pages/Landing";
import Store from "./pages/Store";
import Videos from "./pages/Videos";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import FAQ from "./pages/FAQ";
import Story from "./pages/Story";
import Charities from "./pages/Charities";
import Mission from "./pages/Mission";
import ToolShed from "./pages/ToolShed";
import WeeklyBlog from "./pages/WeeklyBlog";
import EditBlog from "./pages/EditBlog";
import BlogAdmin from "./pages/BlogAdmin";
import ProductAdmin from "./pages/ProductAdmin";
import AdminDashboard from "./pages/AdminDashboard";
import ImageAdmin from "./pages/ImageAdmin";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route element={<Layout />}>
          <Route path="/landing" element={<Landing />} />
          <Route path="/store" element={<Store />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/story" element={<Story />} />
          <Route path="/charities" element={<Charities />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/toolshed" element={<ToolShed />} />
          <Route path="/weeklyblog" element={<WeeklyBlog />} />
          <Route path="/edit-blog" element={<EditBlog />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/blog-admin" element={<BlogAdmin />} />
          <Route path="/product-admin" element={<ProductAdmin />} />
          <Route path="/image-admin" element={<ImageAdmin />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
