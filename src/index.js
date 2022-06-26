import React from "react";
import {createRoot} from "react-dom";
import { BrowserRouter as Router } from "react-router-dom"
import "./index.css";
import App from "./App";
import { makeServer } from "./server";

// Call make Server
makeServer();
const container = document.getElementById('root');
const root = createRoot(container)
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
)
