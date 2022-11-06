import React from "react";
import ReactDOM from "react-dom";
import "./index.css"; // Imports tailwind utilities.
import App from "./App";
import { ContextProvider } from "./contexts/ContextProvider";

// Hooking the rreact app to the root div.
ReactDOM.render(<App />, document.getElementById("root"));
