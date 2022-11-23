import express from "express";
// Importing functions from the controller
import { updateticket } from "../controllers/updateticket.js";
import { getFeedback } from "../controllers/feedback.js";

const router = express.Router();

router.get("/", getFeedback);
router.post("/", updateticket);

export default router;
