import React from "react";
import styled from "styled-components";
const TableStyled = styled.div`
  width: 130px;
  height: 125px;
  border: 15px solid ${({ color }) => color.base};
  box-sizing: border-box;
  display: flex;
  background: white;
  border-radius: 50%;
  box-shadow: 0 10px 0 -4px ${({ color }) => color.border};
  cursor: pointer;
  position: relative;
  z-index: 2;
  &:active {
    transform: scale(0.9);
  }
  .box {
    box-shadow: 0 -4px #babfd4;
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
};
function Token({ name }) {
  return (
    <TableStyled color={colors[name]}>
      <div className="box">
        <img src={`./images/icon-${name}.svg`} alt="" />
      </div>
    </TableStyled>
  );
}

export default Token;
