import React from "react";
import Styled from "styled-components";
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate("/");
    };

    return (
        <span>
            <StyledTop>
                <button
                style={homebtn}
                onClick={handleButtonClick}
                >
                    화면 로고 이미지 넣기
                </button>
            </StyledTop>
        </span>
    );
};

export default Home;

const StyledTop = Styled.span`
    /* text-align: center; */
`;

const homebtn = {
    color: "black",
    padding: "1rem",
    border: "2px solid black",
    cursor: "pointer",
    marginLeft: "5rem",
    marginTop: "3rem"
}