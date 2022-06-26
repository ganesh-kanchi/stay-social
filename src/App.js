import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { LandingPage, HomePage } from "./pages";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="home" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
