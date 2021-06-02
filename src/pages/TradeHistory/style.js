import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  background-color: #f0ffff;
  flex-direction: column;
  overflow-x: hidden;
  .Title {
    font-size: 20px;
    text-align: center;
    color: darkblue;
  }
  .Team {
    display: flex;
    flex-wrap: wrap;
    width: 50%;
  }
`;

export const Teams = styled.div`
  display: flex;
`;

export const PokemonCard = styled.div`
  width: 8rem;
  height: 8rem;
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

export const Header = styled.div`
  align-items: center;

  svg {
    font-size: 1.5rem;
    margin: 1rem;
    color: darkblue;
    cursor: pointer;
  }

  p {
    color: #409ae1;
    font-size: 30px;
    line-height: 0.5rem;
    position: relative;
    left: 40%;
    top: 0rem;
  }
`;
