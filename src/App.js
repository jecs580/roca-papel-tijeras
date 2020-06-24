import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import Header from "./header";
import styled from "styled-components";
import Wrapper from "./wrapper";
import Table from "./table";
const AppStyled = styled.main`
  @import url("https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:wght@600;700&display=swap");
  /* background: #111f43; */
  font-family: "Barlow Semi Condensed", sans-serif;
  background-image: radial-gradient(
    circle at top,
    hsl(214, 47%, 23%) 40%,
    hsl(237, 49%, 15%) 100%
  );
  color: white;
  min-height: 100vh;
  padding: 2em;
  font-weight: 700;
  /* body {
    font-family: "Barlow Semi Condensed", sans-serif;
  } */
`;

function App() {
  return (
    <AppStyled>
      <Wrapper>
        <Header />
        <Table />
      </Wrapper>
    </AppStyled>
  );
}

export default App;
