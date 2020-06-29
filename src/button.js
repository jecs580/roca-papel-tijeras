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
export const WhiteButton = styled(ButtonStyled)`
  /* Creacion un nuevo componente usando los estilos de otro y solo cambiando
  atributos particulares. De este modo nos ahorramos de crear un archivo con el nuevo estilo */
  background: white;
  color: #565468;
  min-width: 220px;
`;
function Button({ children, ...props }) {
  return <ButtonStyled {...props}>{children}</ButtonStyled>;
}

export default Button;
