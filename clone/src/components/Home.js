import React from "react";
import Styled from "styled-components";
import { useNavigate } from "react-router-dom";

function Home() {
    return (
        <StyledTop>
            <button style={homebtn}>

                안녕하세요?

            </button>
        </StyledTop>
    );
};

export default Home;

const StyledTop = Styled.h1`
    text-align: center;
`;

const homebtn = {
    color: "black",
    padding: "1rem",
    border: "2px solid black"
}