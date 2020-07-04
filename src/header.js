import React from "react";
import styled from "styled-components";
import Score from "./score";
const HeaderStyled = styled.div`
  color: white;
  padding: 12px 12px 12px 23px;
  border: 3px solid rgba(255, 255, 255, 0.29);
  border-radius: 0.5em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h1 {
    margin: 0;
    font-size: 21px;
    line-height: 16px;
    font-weight: 700;
    text-transform: uppercase;
  }
  @media screen and (min-width: 1024px) {
    padding: 15px;
    border-radius: 1.2em;
    h1 {
      padding: 15px;
      font-size: 40px;
      line-height: 0.78;
    }
  }
`;

function Header() {
  return (
    <HeaderStyled>
      <h1>
        Rock
        <br /> paper
        <br /> scissors
      </h1>
      <Score />
    </HeaderStyled>
  );
}

export default Header;
