import { useState } from "react";
import styled from "styled-components";
import GlobalStyle from "./assets/GlobalStyle";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import API1 from "./components/API1/RICK";
import API2 from "./components/API2/POKE";
import API3 from "./components/API3/API3";
// https://goweather.herokuapp.com/weather/São Paulo

const Header = styled.header`
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  justify-content: space-evenly;
  align-content: center;
`;

const Navlist = styled.nav`
  display: flex;
  align-items: center;
`;

const UlistNav = styled.ul`
  display: flex;
  min-width: 300px;
  justify-content: space-between;
  text-align: center;
`;

const FooterUni = styled.footer`
  display: flex;
  min-height: 80px;
  justify-content: center;
  align-content: center;
  padding: 20px;
  text-align: center;
`;
const Mid = styled.main`
  display: flex;
  min-height: 75vh;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 20px;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Header>
          <h1>Portal Olokinho</h1>
          <Navlist>
            <UlistNav>
              <li>
                <Link to="API1">API1</Link>
              </li>
              <li>
                <Link to="API2">API2</Link>
              </li>
              <li>
                <Link to="API3">API3</Link>
              </li>
            </UlistNav>
          </Navlist>
        </Header>
        <Routes>
          <Route
            path="/"
            element={
              <Mid>
                <h2>
                  Click escolha uma opção acima e veja as funcionabilidades.
                </h2>
              </Mid>
            }
          />
          <Route path="/API1" element={<API1 />} />
          <Route path="/API2" element={<API2 />} />
          <Route path="/API3" element={<API3 />} />
        </Routes>
        <FooterUni>
          <h2>@LUCAS GABRIEL - VNW 2023</h2>
        </FooterUni>
      </BrowserRouter>
    </>
  );
}

export default App;
