import React from "react";
import About from "./About.jsx";
import Services from "./Services.jsx";
import Testimonials from "./Testimonial.jsx";
import ContactForm from "./ContactForm.jsx";

export default function Home() {
  return (
    <div style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
      {/* Navbar */}
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "15px 30px",
          backgroundColor: "#0f172a",
          color: "#fff",
          position: "sticky",
          top: 0,
          zIndex: 1000,
          boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
        }}
      >
        <div style={{ fontWeight: "bold", fontSize: "1.5rem", cursor: "pointer" }}>
          Alpha Project
        </div>
        <div style={{ display: "flex", gap: "20px" }}>
          {["About", "Services", "Testimonials", "Contact"].map((section) => (
            <a
              key={section}
              href={`#${section.toLowerCase()}`}
              style={{
                color: "#fff",
                textDecoration: "none",
                fontWeight: 500,
                transition: "color 0.3s",
              }}
              onMouseEnter={(e) => (e.target.style.color = "#38bdf8")}
              onMouseLeave={(e) => (e.target.style.color = "#fff")}
            >
              {section}
            </a>
          ))}
        </div>
      </nav>

      {/* Hero banner */}
      <section
        style={{
          textAlign: "center",
          padding: "80px 20px",
          background: "linear-gradient(135deg,#1e293b,#0f172a)",
          color: "#fff",
        }}
      >
        <h1 style={{ fontSize: "2.5rem", marginBottom: "15px" }}>
          Welcome to Alpha Student Project
        </h1>
        <p style={{ color: "#cbd5e1", maxWidth: "650px", margin: "0 auto", fontSize: "1.1rem" }}>
          A clean, responsive full-stack demo showcasing React on the front, Express + Mongo on the
          back, and a simple but modern UI.
        </p>
      </section>

      {/* Main content */}
      <main className="container" style={{ padding: "50px 20px" }}>
        <About id="about" />
        <Services id="services" />
        <Testimonials id="testimonials" />
        <ContactForm id="contact" />
      </main>

      {/* Footer */}
      <footer
        style={{
          textAlign: "center",
          padding: "20px",
          backgroundColor: "#0f172a",
          color: "#fff",
          borderTop: "1px solid #1e293b",
        }}
      >
        © {new Date().getFullYear()} — Fullstack Test
      </footer>
    </div>
  );
}
