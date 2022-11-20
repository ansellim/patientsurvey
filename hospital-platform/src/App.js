import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { Sidebar } from "./components";

import { Dashboard, Opentickets, Employees, Login } from "./pages";

import "./App.css";

import { useEffect, useState } from "react";
import { getFeedbackItems } from "./actions/feedbackItems";

import {
  Box,
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
} from "@mui/material";

import { useDispatch } from "react-redux";
import useToken from "./hooks/useToken";

const App = () => {
  const { token, setToken } = useToken();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFeedbackItems());
  }, [dispatch]);

  console.log(token);

  if (!token) {
    return <Login setToken={setToken}></Login>;
  }

  // const { activeMenu } = useStateContext();
  const activeMenu = true;
  return (
    <div>
      <BrowserRouter>
        <div>
          {/* This div will hold the sidebar. */}
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          )}
        </div>
        <div
          className={`dark:bg-main-bg bg-main-bg min-h-screen w-full ${
            activeMenu ? "md:ml-72" : "flex-2"
          }`}
        >
          {/* This div will hold everything to the right of the sidebar,
            including the navbar, and the contents of the main page. */}
          <div>
            <Routes>
              {/* Navigating to main Dashboard */}
              <Route path="/" element={<Dashboard />} />
              <Route path="/dashboard" element={<Dashboard />} />

              {/* Navigating to open tickets page */}
              <Route path="/opentickets" element={<Opentickets />} />

              {/* Navigating to Employees page */}
              <Route path="/employees" element={<Employees />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
