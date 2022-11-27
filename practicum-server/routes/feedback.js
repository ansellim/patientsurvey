import express from "express";
// Importing functions from the controller
import {
  getFeedback,
  createFeedback,
  getFeedbackStatistics,
} from "../controllers/feedback.js";

const router = express.Router();

router.get("/", getFeedback);
router.get("/statistics", getFeedbackStatistics);
router.post("/", createFeedback);

export default router;
