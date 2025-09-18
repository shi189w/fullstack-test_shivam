import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services";
import Testimonials from "./components/Testimonial";
import ContactForm from "./components/ContactForm";
import Homepage from "./components/Homepage";
export default function App() {
  return (
    <div>
      <Header />
      <main className="container">
       <Homepage />
        {/* <About /> */}
        {/* <Services /> */}
        {/* <Testimonials /> */}
        {/* <ContactForm /> */}
      </main>
      <footer className="footer">© {new Date().getFullYear()} — Fullstack test</footer>
    </div>
  );
}
