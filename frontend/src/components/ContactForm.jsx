import React, { useState } from "react";
// import "../style.css";
import "./ContactForm.css";

const API = import.meta.env.VITE_API_URL || "http://localhost:5000";

export default function ContactForm(){
  const [form, setForm] = useState({ name:"", email:"", phone:"", message:"" });
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState(null);

  function update(e){
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e){
    e.preventDefault();
    setFeedback(null);

    // quick client-side checks (UX)
    if (form.name.trim().length < 2) return setFeedback({ type:"error", text:"Name too short" });
    if (!form.email.includes("@")) return setFeedback({ type:"error", text:"Enter a valid email" });
    if (form.message.trim().length < 10) return setFeedback({ type:"error", text:"Message too short" });

    setLoading(true);
    try {
      const res = await fetch(`${API}/api/contact`, {
        method:"POST",
        headers: { "Content-Type":"application/json" },
        body: JSON.stringify(form)
      });
      const data = await res.json();
      if (!res.ok) {
        // server supplied validation errors
        if (data?.errors) setFeedback({ type:"error", text: data.errors[0].msg || "Validation error" });
        else setFeedback({ type:"error", text: data.message || "Server error" });
      } else {
        setFeedback({ type:"success", text: data.message || "Sent" });
        setForm({ name:"", email:"", phone:"", message:"" });
      }
    } catch (err) {
      setFeedback({ type:"error", text:"Network error — try again" });
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="section" aria-labelledby="contact-title">
      <h2 id="contact-title">Contact</h2>
      <form onSubmit={handleSubmit} style={{marginTop:12}}>
        <div className="form-row">
          <div className="field">
            <input name="name" placeholder="Your name" value={form.name} onChange={update} />
          </div>
          <div className="field">
            <input name="email" placeholder="Email" value={form.email} onChange={update} />
          </div>
        </div>
        <div style={{marginTop:8}}>
          <input name="phone" placeholder="Phone (optional)" value={form.phone} onChange={update} />
        </div>
        <div style={{marginTop:8}}>
          <textarea name="message" rows="5" placeholder="What would you like to say?" value={form.message} onChange={update}></textarea>
        </div>

        <div className="form-actions">
          <div style={{marginRight:12, alignSelf:"center"}}>
            {feedback && <small style={{color: feedback.type==="error" ? "#fca5a5" : "#bbf7d0"}}>{feedback.text}</small>}
          </div>
          <button className="btn" type="submit" disabled={loading}>{loading ? "Sending..." : "Send message"}</button>
        </div>
      </form>
    </section>
  );
}
