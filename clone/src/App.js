import React from "react"
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import First from "./components/First";
import Search from "./components/Search";

function App() {
  return (
    <div className="App">
      <Router>
        <Home />
        <Search />
        <Routes>
          <Route path="/first" element={<First />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
