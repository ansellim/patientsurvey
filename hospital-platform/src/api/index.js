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
}

export async function saveTicket(statusticket){
  try{
    //console.log(statusticket);
    // const { data: response } = await axios.post(url + "/login", {
    //   body: JSON.stringify(statusticket.ticketstatus, ticketId), 
    //}); //use data destructuring to get data from the promise object
    //return response;
    const { data: response } = await axios.post(url + "/updateticket", {
      body: JSON.stringify(statusticket), 
    });
   // console.log(response);
    return response;
  }catch(error){
    console.log(error);
  }

}