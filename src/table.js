import React, { useState, useContext } from "react";
import styled from "styled-components";
import Token from "./token";
import { WhiteButton } from "./button";
import { ScoreContext } from "./App";
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
  .in-game {
    text-align: center;
    text-transform: uppercase;
    font-size: 0.8em;
    font-weight: 600;
    letter-spacing: 2px;
  }
  .results {
    text-align: center;
    text-transform: uppercase;
    h2 {
      opacity: ${({ letter }) => letter};
    }
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
const elements = ["paper", "scissors", "rock"];
function Table() {
  const { score, setScore } = useContext(ScoreContext);
  const [letter, setLetter] = useState(0);
  const [results, setResults] = useState(""); // cambiar a vacio
  const [housePick, setHousePick] = useState("default"); // cambiar a default
  const [playing, setPlaying] = useState(false); // cambiar a falso
  const [pick, setPick] = useState(""); // Cambiar a vacio
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  function lanchHousePick() {
    return new Promise((resolve) => {
      let pick;
      const interval = setInterval(() => {
        pick = elements[getRandomInt(0, 3)];
        setHousePick(pick);
      }, 60);
      setTimeout(() => {
        clearInterval(interval);
        resolve(pick);
      }, 1000);
    });
  }
  async function onClick(name) {
    setPlaying(true);
    setPick(name);
    const house = await lanchHousePick();
    // console.log("la casa eligio", house);
    const results = play(house, name);
    // console.log(results);
    setResults(results);
    setLetter(1);
    if (results === "win") {
      setScore(score + 1);
    }
  }
  function play(housePick, pick) {
    if (housePick === pick) {
      return "draw";
    }
    if (pick === "paper") {
      if (housePick === "scissors") {
        return "lose";
      }
      if (housePick === "rock") {
        return "win";
      }
    }
    if (pick === "rock") {
      if (housePick === "paper") {
        return "lose";
      }
      if (housePick === "scissors") {
        return "win";
      }
    }
    if (pick === "scissors") {
      if (housePick === "paper") {
        return "win";
      }
      if (housePick === "rock") {
        return "lose";
      }
    }
  }
  function handlePlayAgainClick() {
    setPlaying(false);
    setLetter(0);
  }
  return (
    <TableStyled playing={playing} letter={letter}>
      <span className="line"></span>
      {!playing ? (
        <>
          <Token name="paper" onClick={onClick} />
          <Token name="scissors" onClick={onClick} />
          <Token name="rock" onClick={onClick} />
        </>
      ) : (
        <>
          <div className="in-game">
            <Token name={pick} />
            <p>You Picked</p>
          </div>
          <div className="in-game">
            <Token name={housePick} />
            <p>The house Picked</p>
          </div>
          <div className="results">
            <h2>You {results}</h2>
            <WhiteButton onClick={handlePlayAgainClick}>Play again</WhiteButton>
          </div>
        </>
      )}
    </TableStyled>
  );
}

export default Table;
