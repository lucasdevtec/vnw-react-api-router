import { useState } from "react";
import Cards from "../Cards/Cards";
import styled from "styled-components";

const MainBox = styled.main`
  display: flex;
  flex-wrap: wrap;
  padding: 30px;
  justify-content: space-evenly;
  align-content: center;
`;

function API1() {
  return (
    <MainBox>
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      <Cards />
    </MainBox>
  );
}

export default API1;
