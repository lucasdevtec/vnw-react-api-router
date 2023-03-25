import styled from "styled-components";

const Cardbox = styled.div`
  border: 10px solid black;
  width: 300px;
  height: 400px;
  padding: 10px;
  border-radius: 20px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  align-content: center;
`;

const Imgcop = styled.img`
  width: 100%;
  border-radius: 100%;
`;

function Cards(props) {
  return (
    <Cardbox>
      <Imgcop src={props.img} alt={props.name} />
      <h3>{props.name}</h3>
    </Cardbox>
  );
}

export default Cards;
