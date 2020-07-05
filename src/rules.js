import React, { useState } from "react";
import styled from "styled-components";
import Button from "./button";

const RulesStyled = styled.div`
  text-align: center;
  &:before {
    content: "";
    display: ${({ visible }) => (visible ? "block" : "none")};
    top: 0;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 2;
    background: rgba(0, 0, 0, 0.6);
  }
  .rules-overlay {
    background: white;
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 3;
    display: flex;
    /* min-height: 100vh; */
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
  @media screen and (min-width: 768px) {
    /* text-align: right; */
    .button {
      position: fixed;
      right: 2em;
      bottom: 2em;
    }
    .rules-overlay {
      padding: 2em;
      padding-top: 0em;
      width: 400px;
      margin: auto;
      box-sizing: border-box;
      top: 0;
      border-radius: 10px;
      bottom: initial;
      transform: translateY(50%);
    }
    h2 {
      align-self: flex-start;
      font-size: 32px;
      margin-bottom: 1.2em !important;
    }
    .close-button {
      position: absolute;
      right: 2em;
      cursor: pointer;
      top: 0.4em;
    }
  }
`;

function Rules() {
  const [visible, setVisible] = useState(false); //Sirve como opereador ternario
  function handleToggleClick() {
    setVisible(!visible);
  }
  return (
    <RulesStyled visible={visible}>
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
      <Button className="button" onClick={handleToggleClick}>
        Rules
      </Button>
    </RulesStyled>
  );
}

export default Rules;
