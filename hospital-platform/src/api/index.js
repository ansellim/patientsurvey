// Connect to Express server and fetch the feedback items.

import axios from "axios";

const url = "http://localhost:3006/feedback"; // to connect to the Express server

export const fetchFeedback = () => axios.get(url); // get feedback items from backend
