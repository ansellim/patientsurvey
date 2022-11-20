// Connect to Express server and fetch the feedback items.

import axios from "axios";

const url = "http://localhost:3006"; // to connect to the Express server

export const fetchFeedback = () => axios.get(url + "/feedback"); // get feedback items from backend

export async function loginUser(credentials) {
  try {
    const { data: response } = await axios.post(url + "/login", {
      body: JSON.stringify(credentials),
    }); //use data destructuring to get data from the promise object
    return response;
  } catch (error) {
    console.log(error);
  }

  //   axios
  //     .post(url + "/login", { body: JSON.stringify(credentials) })
  //     .then((response) => {
  //       console.log(response.data);
  //       return response.data;
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
}
