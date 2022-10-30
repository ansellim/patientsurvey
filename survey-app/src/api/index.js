import axios from "axios";

// Hardcoded to point to the server's Endpoint for feedback.
// Testing change.
const url = "http://localhost:3006/feedback";

export const fetchFeedback = () => {
  axios.get(url).then((res) => {
    console.log(res);
    console.log(res.data);
  });
};
export const createFeedback = (newPost) => {
  console.log(newPost);

  axios.post(url, newPost).then((res) => {
    console.log(res);
    console.log("Feedback Submitted");
    //console.log(res.data);
  });
};
