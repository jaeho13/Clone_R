import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import First from "./components/First";
import Header from "./components/header/Header"
import Home from "./components/Home";
import Search from "./components/Search";

function App() {
  return (
    <div className="App">
      <Router>
        <Home />
        <Search />
        {/* <Header /> */}
        <Routes>
          <Route path="/first" element={<First />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
