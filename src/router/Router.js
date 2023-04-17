import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "../components/Home";
import First from "../components/First";

function Router() {
    return (
        <div className="Router">
            <Router>
                <Routes>
                    <Route path="/first" element={<First />}/>
                </Routes>
            </Router>
        </div>
    );
};

export default Router;