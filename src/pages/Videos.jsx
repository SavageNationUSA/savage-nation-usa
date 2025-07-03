import React from "react";

export default function Videos() {
  const videoIds = ["YQt8q8VrNbw", "QssmhbtA_g0", "vooONATHNfo"];
  return (
    <div className="bg-[#111] min-h-screen p-8">
      <h2 className="text-white text-[32px] mb-6">Savage Nation Videos</h2>
      <div className="flex flex-wrap gap-6">
        {videoIds.map(id => (
          <iframe
            key={id}
            width="360"
            height="215"
            src={`https://www.youtube.com/embed/${id}`}
            title="Savage Nation Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="border-4 border-white rounded-lg"
          />
        ))}
      </div>
      <br />
      <a href="/landing">
        <button
          className="mt-8 py-[14px] px-[42px] rounded bg-[#eee] font-bold text-lg border-none shadow-[2px_4px_14px_rgba(0,0,0,0.13)]"
        >
          Back
        </button>
      </a>
    </div>
  );
}
