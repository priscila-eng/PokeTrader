import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    display: flex;
  }
  .Team {
    display: flex;
    flex-direction: column;
    align-items: center;
    border-right: 1px solid black;
    padding: 1rem;
  }

  input {
    width: 10rem;
  }

  button {
    cursor: pointer;
  }
`;
