import React from "react";
import { Link } from "react-router-dom";
import Layout from "../Layout";

export default function Videos() {
  const videoIds = ["YQt8q8VrNbw", "QssmhbtA_g0", "vooONATHNfo"];
  return (
    <Layout className="p-8 text-black">
      <h2 className="text-4xl font-bold mb-6">Savage Nation Videos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {videoIds.map(id => (
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
      <Link to="/landing">
        <button className="px-6 py-3 bg-gray-300 hover:bg-gray-400 rounded-md">Back</button>
      </Link>
    </Layout>
  );
}
