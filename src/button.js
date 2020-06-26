import React from "react";
import styled from "styled-components";

const ButtonStyled = styled.div`
  display: inline-flex;
  border: 1px solid white;
  border-radius: 0.5em;
  min-width: 128px;
  padding: 0.5em;
  box-sizing: border-box;
  text-transform: uppercase;
  justify-content: center;
  font-size: 1.2em;
  letter-spacing: 2.5px;
  cursor: pointer;
`;

function Button({ ...props }) {
  return <ButtonStyled {...props}>Rules</ButtonStyled>;
}

export default Button;
