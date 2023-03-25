import { useEffect, useState } from "react";
import Cards from "../Cards/Cards";
import styled from "styled-components";
import axios from "axios";

const MainBox = styled.main`
  display: flex;
  flex-wrap: wrap;
  padding: 30px;
  justify-content: space-evenly;
  align-content: center;
`;

function API1() {
  const [rickAr, setRickAr] = useState([]);
  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/character").then((response) => {
      setRickAr(response.data.results);
    });
    console.log(rickAr);
  }, []);
  return (
    <MainBox>
      {rickAr.map((data) => {
        return <Cards key={data.id} name={data.name} img={data.image} />;
      })}
    </MainBox>
  );
}

export default API1;
