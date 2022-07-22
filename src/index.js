import React from "react";
import {createRoot} from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { DocumentSizeProvider } from "./contexts/documentSizeContext";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { Provider } from "react-redux";
import store from "app/store";

// Call make Server
makeServer();
const container = document.getElementById('root');
const root = createRoot(container)
root.render(
    <Provider store={store}>
      <Router>
          <DocumentSizeProvider>
                <App />
          </DocumentSizeProvider>
      </Router>
    </Provider>
  
)
