import React from "react";
import styled from "styled-components";
const ScoreStyled = styled.div`
  background: white;
  text-align: center;
  padding: 10px 0;
  border-radius: 0.5em;
  width: 80px;
  small {
    color: #2a45c2;
    text-transform: uppercase;
    font-size: 10px;
  }
  p {
    font-size: 40px;
    margin: 0;
    color: #565468;
    font-weight: 700;
    position: relative;
    line-height: 0.9;
  }
`;

function Score() {
  return (
    <ScoreStyled>
      <small>Score</small>
      <p>12</p>
    </ScoreStyled>
  );
}

export default Score;
