import React from "react";
import "./App.css";
import {AllRoutes} from "./routes/AllRoutes"
import {useSelector} from "react-redux";


function App() {
  const {token} = useSelector(state=> state.auth);
  console.log(token)
  return (
    <div className="App">
      <AllRoutes />
    </div>
  );
}

export default App;
