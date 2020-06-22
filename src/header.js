import React from "react";
import styled from "styled-components";

const HeaderStyled = styled.div`
  color: white;
  padding: 23px;
  border: 3px solid rgba(255, 255, 255, 0.29);
  border-radius: 0.5em;
  h1 {
    font-size: 21px;
    line-height: 16px;
    font-weight: 700;
    text-transform: uppercase;
  }
`;

function Header() {
  return (
    <HeaderStyled>
      <h1>
        Rock
        <br /> paper
        <br /> scissors{" "}
      </h1>
    </HeaderStyled>
  );
}

export default Header;
