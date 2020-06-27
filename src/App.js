import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import Header from "./header";
import styled from "styled-components";
import Wrapper from "./wrapper";
import Table from "./table";
import Rules from "./rules";
const AppStyled = styled.main`
  font-family: "Barlow Semi Condensed", sans-serif;
  background-image: radial-gradient(
    circle at top,
    hsl(214, 47%, 23%) 40%,
    hsl(237, 49%, 15%) 100%
  );
  color: white;
  font-weight: 700;
  .app-content {
    padding: 2em;
    box-sizing: border-box;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  /* span {
    text-transform: uppercase;
    font-weight: 600;
    text-align: center;
    border: 1px solid white;
    width: 30%;
  } */
`;

function App() {
  return (
    <AppStyled>
      <Wrapper>
        <div className="app-content">
          <Header />
          <Table />
          <Rules />
        </div>
      </Wrapper>
    </AppStyled>
  );
}

export default App;
