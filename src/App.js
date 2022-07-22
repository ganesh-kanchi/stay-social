import React from "react";
import "./App.css";
import {AllRoutes} from "./routes/AllRoutes"
// import {useSelector} from "react-redux";

function App() {
  // const {token} = useSelector(state=> state.auth);
  return (
    <div className="bg-dark text-light">
      <AllRoutes />
    </div>
  );
}

export default App;
