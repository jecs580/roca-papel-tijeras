import React, { useState } from "react";
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
    display: ${({ playing }) => (!playing ? "block" : "none")};
    height: 15px;
    background: rgba(0, 0, 0, 0.3);
    position: absolute;
    left: 60px;
    right: 60px;
    top: 55px;

    &:before {
      content: "";
      height: 15px;
      background: rgba(0, 0, 0, 0.3);
      position: absolute;
      left: 0;
      right: 0;
      /* top: 55px; */
      transform: rotate(60deg);
      transform-origin: left top;
    }
    &:after {
      content: "";
      height: 15px;
      background: rgba(0, 0, 0, 0.3);
      position: absolute;
      left: 0;
      right: 0;
      /* top: 55px; */
      transform: rotate(296deg);
      transform-origin: right top;
    }
  }
`;

function Table() {
  const [playing, setPlaying] = useState(false);
  const [pick, setPick] = useState("");
  function onClick(name) {
    console.log(name);
    setPlaying(true);
    setPick(name);
  }
  return (
    <TableStyled playing={playing}>
      <span className="line"></span>
      {!playing ? (
        <>
          <Token name="paper" onClick={onClick} />
          <Token name="scissors" onClick={onClick} />
          <Token name="rock" onClick={onClick} />
        </>
      ) : (
        <section className="in-game">
          <div>
            <Token name={pick} />
            <p>You Picked</p>
          </div>
          <div>
            <Token name={pick} />
            <p>The house Picked</p>
          </div>
        </section>
      )}
    </TableStyled>
  );
}

export default Table;
