import React from "react";
import Layout from "../Layout";

const faqItems = [
  { question: "What is Savage Nation USA?", answer: "Your fierce, patriotic brand." },
  { question: "How do I order merch?",      answer: "Head to the Store page and click Buy Now." },
  { question: "How can I get in touch?",    answer: "Use the Contact Us form." },
];

export default function FAQ() {
  return (
    <Layout className="p-8 text-black">
      <h2 className="text-4xl font-bold mb-6">FAQ</h2>
      <div className="space-y-4 max-w-2xl">
        {faqItems.map((item, i) => (
          <div key={i}>
            <h3 className="font-semibold">{item.question}</h3>
            <p className="mb-4">{item.answer}</p>
          </div>
        ))}
      </div>
    </Layout>
  );
}
