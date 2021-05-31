import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  .Team {
  }
  button {
    background-color: white;
    color: darkblue;
    height: 2rem;
    cursor: pointer;
    border: 1px solid darkblue;
    border-radius: 5px;
    font-size: 13px;
  }
  button:hover {
    background-color: #7fffd4;
  }
  dt {
    text-align: center;
  }
`;

export const Team = styled.div`
  width: 50%;
  height: 100%;
  background-color: ${(props) => props.teamColor || "#40C5AF"};
  justify-content: center;
  border-right: 1px solid #013220;
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem;
  }
  label {
    color: darkblue;
    margin-bottom: 1rem;
    font-size: 28px;
  }
  input {
    border-radius: 5px;
    border: 1px solid #013220;
    width: 15rem;
    height: 2rem;
  }
  .ButtonContainer {
    position: absolute;
    bottom: 5rem;
    right: 5rem;
  }
`;

export const Error = styled.p`
  font-size: 12px;
  color: red;
  text-align: center;
`;
