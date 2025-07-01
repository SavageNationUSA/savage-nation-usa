import React from "react";

export default function Layout({ children, className = "", style = {} }) {
  return (
    <div
      className={
        "min-h-screen flex flex-col items-center justify-center bg-cover bg-center " +
        className
      }
      style={{ backgroundImage: "url('/bg.png')", ...style }}
    >
      {children}
    </div>
  );
}
