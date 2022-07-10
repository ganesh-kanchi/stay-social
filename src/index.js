import React from "react";
import {createRoot} from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./contexts/authContext";
import { DocumentSizeProvider } from "./contexts/documentSizeContext";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";

// Call make Server
makeServer();
const container = document.getElementById('root');
const root = createRoot(container)
root.render(
    <Router>
      <DocumentSizeProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </DocumentSizeProvider>
    </Router>
)
