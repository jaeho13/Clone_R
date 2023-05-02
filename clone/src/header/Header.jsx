import React from "react";
import Styled from "styled-components"


const Header = props => {
    return (
        <Top>
            <div>사진</div>            
            <Input type="text" placeholder="검색하기" />
            <div>메세지</div>
            <div>로그아웃</div>
        </Top>
    )
};

export default Header;

const Top = Styled.header`
    width: 100%;
    font-size: 3rem;
    background-color: yellowgreen;
    text-align: center;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center
`;

const Input = Styled.input`
  width: 40%;
  height: 40px;
  
`;