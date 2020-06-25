import React from "react";
import styled from "styled-components";
import Token from "./token";
const TableStyled = styled.div`
  display: grid;
  grid-template-columns: 130px 130px;
  justify-content: center;
  justify-items: center;
  grid-gap: 50px;
  background: url("./images/bg-triangle.svg") no-repeat center;
  /* background-size: cover; */
  background-size: 85%;
  /* background-position-y: 50px; */
  margin: 2em 0;
  & div:nth-of-type(3) {
    grid-column: span 2; /*Especificamos que el tercer hijo ocupe dos espacios de la grilla*/
  }
`;

function Table() {
  return (
    <TableStyled>
      <Token name="paper" />
      <Token name="scissors" />
      <Token name="rock" />
    </TableStyled>
  );
}

export default Table;
