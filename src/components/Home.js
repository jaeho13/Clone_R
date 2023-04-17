import React from "react";
import {Link} from "react-router-dom"

function Home() {
    return (
        <Link to="/first">
    <h1>안녕하세요?</h1>
        </Link>
    );
};

export default Home;