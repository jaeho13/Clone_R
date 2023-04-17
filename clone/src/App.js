import React from "react"
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import First from "./components/First";


function App() {
  return (
    <div className="App">
      <Home />
      <Router>
        <Routes>
          <Route path="/first" element={<First />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
