import styled from "styled-components";

const MainBox = styled.div`
  border: 10px solid black;
  background-color: aqua;
  width: 300px;
  height: 400px;
  padding: 10px;
  border-radius: 20px;
  margin 10px
`;

function Cards() {
  return (
    <MainBox>
      <img src="" alt="" />
      <h3>ola</h3>
    </MainBox>
  );
}

export default Cards;
