import React from "react";
import { Link } from "react-router-dom";
import Layout from "../Layout";

export default function Videos() {
  const videoIds = ["YQt8q8VrNbw", "QssmhbtA_g0", "vooONATHNfo"];
  return (
    <Layout className="p-8 text-white bg-[#111] bg-none">
      <h2 className="text-3xl sm:text-4xl font-bold mb-6">Savage Nation Videos</h2>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {videoIds.map(id => (
          <iframe
            key={id}
            className="w-full h-60 sm:h-72 rounded-lg border-4 border-white"
            src={`https://www.youtube.com/embed/${id}`}
            title="Savage Nation Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
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
