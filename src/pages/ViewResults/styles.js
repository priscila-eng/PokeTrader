import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  background-color: #f0ffff;
  flex-direction: column;
  .Teams {
    display: flex;
  }
  .Teams .Title {
    margin-left: 2rem;
  }
  .Team {
    display: flex;
    flex-wrap: wrap;
    padding: 1rem;
  }
`;

export const PokemonCard = styled.div`
  max-width: 15rem;
  max-height: 15rem;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  border-radius: 8px;
  background-color: ${(props) => props.teamColor || "#40C5AF"};
  justify-content: center;
  padding: 1rem;
  margin-bottom: 1rem;
  margin-left: 1rem;
  p {
    font-size: 13px;
    line-height: 0.5rem;
  }
`;

export const Title = styled.div`
  text-align: center;
  font-size: 30px;
  color: ${(props) => props.titleColor || "red"};
  padding: 2rem;
`;
