import React from "react";
import styled from "styled-components";
import Token from "./token";
const TableStyled = styled.div`
  display: grid;
  grid-template-columns: 130px 130px;
  justify-content: center;
  justify-items: center;
  grid-gap: 30px 50px; /* [Distancia vertical distancia horizontal]*/
  position: relative;

  /* background: url("./images/bg-triangle.svg") no-repeat center; */
  /* background-size: cover; */
  /* background-size: 85%; */
  /* background-position-y: 50px; */
  margin: 2em 0;
  & div:nth-of-type(3) {
    grid-column: span 2; /*Especificamos que el tercer hijo ocupe dos espacios de la grilla*/
  }
  .line {
    height: 15px;
    background: rgba(0, 0, 0, 0.3);
    position: absolute;
    left: 60px;
    right: 60px;
    top: 55px;
  }
  &:before {
    content: "";
    height: 15px;
    background: rgba(0, 0, 0, 0.3);
    position: absolute;
    left: 60px;
    right: 60px;
    top: 55px;
    transform: rotate(62deg);
    transform-origin: left top;
  }
  &:after {
    content: "";
    height: 15px;
    background: rgba(0, 0, 0, 0.3);
    position: absolute;
    left: 60px;
    right: 60px;
    top: 55px;
    transform: rotate(298deg);
    transform-origin: right top;
  }
`;

function Table() {
  return (
    <TableStyled>
      <span className="line"></span>
      <Token name="paper" />
      <Token name="scissors" />
      <Token name="rock" />
    </TableStyled>
  );
}

export default Table;
