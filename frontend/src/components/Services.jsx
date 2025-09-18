import React from "react";

const services = [
  { id: 1, title: "Frontend Development", desc: "Responsive React interfaces with clear structure and styling." },
  { id: 2, title: "Backend APIs", desc: "Express routes with proper validation, error handling, and MongoDB storage." },
  { id: 3, title: "Deployment Support", desc: "Guidance for hosting on platforms like Vercel, Netlify, or Heroku." },
  { id: 4, title: "Maintenance & Updates", desc: "Keeping projects secure, current, and optimized over time." }
];

export default function Services() {
  return (
    <section className="section">
      <h2>Services</h2>
      <div className="grid" style={{ marginTop: 12 }}>
        {services.map(s => (
          <div key={s.id} className="card">
            <strong>{s.title}</strong>
            <p className="muted">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
