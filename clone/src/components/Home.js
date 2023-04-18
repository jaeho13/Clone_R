import React from "react";
import Styled from "styled-components";
import { useNavigate } from "react-router-dom";

function Home() {
    return (
        <StyledTop>
                메인
        </StyledTop>
    );
};

export default Home;

const StyledTop = Styled.button`
    text-align: center;
`;

// const homebtn = {
//     color: "black",
//     padding: "1rem",
//     border: "2px solid black"
// }