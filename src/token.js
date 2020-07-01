import React from "react";
import styled from "styled-components";
const TokenStyled = styled.div`
  width: 130px;
  height: 125px;
  border: 15px solid
    ${({ color, name }) => (name === "default" ? "transparent" : color.base)};
  box-sizing: border-box;
  display: flex;
  /* padding: ${({ name }) => (name === "default" ? "8px" : "0")}; */
  border-radius: 50%;
  box-shadow: 0 10px 0 -4px ${({ color }) => color.border};
  cursor: pointer;
  position: relative;
  z-index: 2;
  &:active {
    transform: scale(0.9);
  }
  .box {
    /* box-shadow: 0 -4px #babfd4; */
    background: ${({ name }) => (name === "default" ? "#122343" : "white")};
    box-shadow: 0 -4px ${({ name }) =>
      name === "default" ? "transparent" : "#babfd4"};
    flex: 1;
    border-radius: 50%;
    display: flex;
    align-self: stretch;
    justify-content: center;
    align-items: center;
  }
`;
const colors = {
  paper: {
    base: "#516ef4",
    border: "#2543c3",
  },
  rock: {
    base: "#de3a5a",
    border: "#980e31",
  },
  scissors: {
    base: "#eca81e",
    border: "#c76c14",
  },
  default: {
    base: "#1C2E4E",
    border: "transparent",
  },
};
function Token({ name = "default", onClick }) {
  function handleClick() {
    if (onClick) {
      onClick(name);
    }
  }
  const color = colors[name];
  return (
    <TokenStyled color={color} onClick={handleClick} name={name}>
      <div className="box">
        <img src={`./images/icon-${name}.svg`} alt="" />
      </div>
    </TokenStyled>
  );
}

export default Token;
