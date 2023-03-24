import { useState } from "react";
import styled from "styled-components";
import API1 from "./components/API1/RICK";
import API2 from "./components/API2/POKE";
import API3 from "./components/API3/API3";

const Header = styled.header`
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  background-color: #666;
  justify-content: space-evenly;
  align-content: center;
`;

const Navlist = styled.nav`
  display: flex;
  align-items: center;
`;

const UlistNav = styled.ul`
  display: flex;
  background-color: #888;
  min-width: 300px;
  justify-content: space-between;
  text-align: center;
`;

const FooterUni = styled.footer`
  display: flex;
  min-height: 80px;
  justify-content: center;
  align-content: center;
`;

function App() {
  return (
    <div className="App">
      <Header>
        <h1>Portal Olokinho</h1>
        <Navlist>
          <UlistNav>
            <li>
              <a href="">API01</a>
            </li>
            <li>
              <a href="">API02</a>
            </li>
            <li>
              <a href="">API03</a>
            </li>
          </UlistNav>
        </Navlist>
      </Header>
      <API1 />
      <FooterUni>
        <h2>@LUCAS GABRIEL - VNW 2023</h2>
      </FooterUni>
    </div>
  );
}

export default App;
