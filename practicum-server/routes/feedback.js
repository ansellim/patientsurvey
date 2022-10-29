import express from "express";
// Importing functions from the controller
import { getFeedback, createFeedback } from "../controllers/feedback.js";

const router = express.Router();

router.get("/", getFeedback);
router.post("/", createFeedback);

export default router;
