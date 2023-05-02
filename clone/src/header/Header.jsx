import React from "react";
import Styled from "styled-components"


const Header = props => {
    return (
        <Top>
            <Div>사진</Div>
            <Input type="text" placeholder="검색하기" />
            <ButtonGroup>
                <Button>메세지</Button>
                <Button>로그아웃</Button>
            </ButtonGroup>
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
    align-items: center;
`
const Div = Styled.div`
    
`

const Input = Styled.input`
  width: 40%;
  height: 40px; 
`
const ButtonGroup = Styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

const Button = Styled.button`
  width: 100px;
  height: 50px;
`