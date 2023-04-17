import React from "react"
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Home />
      <Router />
    </div>
  );
};

export default App;
