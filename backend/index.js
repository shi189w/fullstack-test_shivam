import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import contactRouter from "./routes/contactRoutes.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// simple health check
app.get("/", (req, res) => res.send({ ok: true }));

// API route for contact form
app.use("/api/contact", contactRouter);

const PORT = process.env.PORT || 5000;
console.log(PORT);
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log(" MongoDB connected");
    app.listen(PORT, () => console.log(` Server listening on ${PORT}`));
  })
  .catch(err => {
    console.error(" MongoDB connection error:", err.message);
    process.exit(1);
  });
