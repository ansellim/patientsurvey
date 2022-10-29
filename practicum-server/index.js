import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import feedbackRoutes from "./routes/feedback.js";

const app = express();

// Using cors. It allows us to relax the security applied to an API.
// This is done by bypassing the Access-Control-Allow-Origin headers, which specify which origins can access the API.
app.use(
  cors({
    origin: "*",
    credentials: false,
  })
);

// Setting up bodyParser so we can properly send requests.
app.use(bodyParser.json({ limit: "1mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "1mb", extended: true }));

// Makes it so any route found under the feedbackRoutes
// router imported starts with the /feedback path
app.use("/feedback", feedbackRoutes);

const CONNECTION_URL =
  "mongodb+srv://wallaceanselsuyash:cs6440practicum@cluster0.yfkcdru.mongodb.net/cs6440-practicum";

const PORT = process.env.PORT || 3006; // Defaulting to port 3006 for now.

// Connecting to db.
mongoose
  .connect(CONNECTION_URL, {
    // Set the below 2 parameters to true to avoid console warnings
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }) // The above returns a promise, so we need the then statement below.
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
  ) // The second parameter above (after the PORT param) is the callback function that runs once our application successfully listens.
  .catch((error) => console.log(error.message));
