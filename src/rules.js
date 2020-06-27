import React, { useState } from "react";
import styled from "styled-components";
import Button from "./button";

const RulesStyled = styled.div`
  text-align: center;
  .rules-overlay {
    background: white;
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 2;
    display: flex;
    min-height: 100vh;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    h2 {
      color: #3b4262;
      margin-bottom: 2em;
      text-transform: uppercase;
      font-weight: 700;
    }
    .close-button {
      margin-top: 2em;
    }
  }
`;

function Rules() {
  const [visible, setVisible] = useState(false); //Sirve como opereador ternario
  function handleToggleClick() {
    setVisible(!visible);
  }
  return (
    <RulesStyled>
      {visible && (
        <div className="rules-overlay">
          <h2>Rules</h2>
          <img src="./images/image-rules.svg" alt="Game rules" />
          <img
            className="close-button"
            onClick={handleToggleClick}
            src="./images/icon-close.svg"
            alt="Close the game rules"
          />
        </div>
      )}
      <Button onClick={handleToggleClick} />
    </RulesStyled>
  );
}

export default Rules;
