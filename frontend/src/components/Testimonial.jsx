import React from "react";

const testimonials = [
  { name: "Riya S.", text: "The UI is clean and easy to follow. Setup was painless—exactly what I needed." },
  { name: "Aman K.", text: "Solid backend structure with validation already baked in. Saved me hours." },
  { name: "Priya D.", text: "App performance feels snappy, even on my older laptop. Great attention to detail." },
  { name: "Harsh P.", text: "Clear documentation and a logical file layout—makes teamwork smoother." }
];

export default function Testimonials() {
  return (
    <section className="section">
      <h2>Testimonials</h2>
      <div className="grid" style={{ marginTop: 12 }}>
        {testimonials.map((t, i) => (
          <div key={i} className="card">
            <strong>{t.name}</strong>
            <p className="muted">{t.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
