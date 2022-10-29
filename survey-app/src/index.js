import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <App />
  // Removing strict mode because it was making functions execute twice:
  // https://stackoverflow.com/a/64249198/11569643
  // <React.StrictMode>
  // </React.StrictMode>
);
