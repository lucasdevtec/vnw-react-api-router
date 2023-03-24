import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    background: teal;
    box-sizing: border-box;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    list-style: none;
    text-decoration: none;
  }
`;

export default GlobalStyle;
