import React from "react";
import "./About.css";

export default function About() {
  const sections = [
    {
      title: "Who We Are",
      text: "A small but focused team building modern full-stack solutions that balance clean code with practical UX."
    },
    {
      title: "Our Mission",
      text: "Deliver straightforward, reliable web apps that help clients move fast without drowning in complexity."
    },
    {
      title: "Core Values",
      text: "Transparency, curiosity, and craftsmanship guide every decision—from database schema to color palette."
    },
    {
      title: "Future Vision",
      text: "Keep experimenting with new tech and methods while staying grounded in what actually serves users."
    }
  ];

  return (
    <section className="about-section">
      <h2>About</h2>
      <div className="grid" style={{ marginTop: 12 }}>
        {sections.map((s, i) => (
          <div key={i} className="card">
            <strong>{s.title}</strong>
            <p className="muted">{s.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
