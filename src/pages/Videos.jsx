import React from "react";

export default function Videos() {
  const videoIds = ["YQt8q8VrNbw", "QssmhbtA_g0", "vooONATHNfo"];
  return (
    <div style={{ background: "#111", minHeight: "100vh", padding: 32 }}>
      <h2 style={{ color: "white", fontSize: 32, marginBottom: 24 }}>Savage Nation Videos</h2>
      <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
        {videoIds.map(id => (
          <iframe
            key={id}
            width="360"
            height="215"
            src={`https://www.youtube.com/embed/${id}`}
            title="Savage Nation Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ border: "4px solid #fff", borderRadius: 12 }}
          />
        ))}
      </div>
      <br />
    </div>
  );
}
