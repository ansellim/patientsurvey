import React from "react";
import ReactDOM from "react-dom";
import "./index.css"; // Imports tailwind utilities.
import App from "./App";
import { ContextProvider } from "./contexts/ContextProvider";

// redux
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import store from "./reducers";
//const store = createStore(reducers, compose(applyMiddleware(thunk)));

// Hooking the rreact app to the root div.
ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
