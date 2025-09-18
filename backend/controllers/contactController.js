import { validationResult } from "express-validator";
import Contact from "../models/Contact.js";
import nodemailer from "nodemailer";

export const submitContact = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  const { name, email, phone, message } = req.body;

  try {
    // Save form data to MongoDB
    const doc = new Contact({ name, email, phone, message });
    await doc.save();

    // Configure Nodemailer to use Gmail service (no manual host/port)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // your Gmail address
        pass: process.env.EMAIL_PASS  // your Gmail app password
      }
    });

    // Send a welcome email back to the user
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Welcome to Our Platform",
      text: `Hello ${name},\n\nThanks for contacting us! We will get back to you soon.\n\n- Team`
    });

    return res.json({ success: true, message: "Contact saved and welcome email sent!" });
  } catch (err) {
    console.error("Save contact or email error:", err);
    return res.status(500).json({ success: false, message: "Server error" });
  }
};
