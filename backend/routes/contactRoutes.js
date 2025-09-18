import express from "express";
import { body } from "express-validator";
import { submitContact } from "../controllers/contactController.js";

const router = express.Router();

router.post("/",
  // server-side validation
  [
    body("name").isLength({ min: 2 }).withMessage("Name must be at least 2 chars"),
    body("email").isEmail().withMessage("Please provide a valid email"),
    body("message").isLength({ min: 10 }).withMessage("Message too short"),
    body("phone").optional().isMobilePhone("any").withMessage("Invalid phone")
  ],
  submitContact
);

export default router;
