import React from "react";
import Styled from "styled-components";


function Search() {
    return(
        <Container>
            <Input type="text" placeholder="🔍검색하기" />
        </Container>
    );
};

export default Search;

const Container = Styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
`;

const Input = Styled.input`
  width: 30%;
  height: 40px;
  border: 2px solid;
  text-Align: center;
`;
