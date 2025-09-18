import React from "react";
import About from "./About.jsx";
import Services from "./Services.jsx";
import Testimonials from "./Testimonial.jsx";
import ContactForm from "./ContactForm.jsx";

export default function Home() {
  return (
    <div>
      {/* Hero banner */}
      <section
        style={{
          textAlign: "center",
          padding: "60px 20px",
          background: "linear-gradient(135deg,#1e293b,#0f172a)",
        }}
      >
        <h1 style={{ fontSize: "2rem", marginBottom: "10px" }}>
          Welcome to Alpha Student Project
        </h1>
        <p style={{ color: "#9aa7b2", maxWidth: "600px", margin: "0 auto" }}>
          A clean, responsive full-stack demo showcasing React on the front,
          Express + Mongo on the back, and a simple but modern UI.
        </p>
      </section>

      {/* Main content */}
      <main className="container">
        <About />
        <Services />
        <Testimonials />
        <ContactForm />
      </main>

      <footer className="footer">
        © {new Date().getFullYear()} — Fullstack Test
      </footer>
    </div>
  );
}
