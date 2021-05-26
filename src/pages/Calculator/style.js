import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;

  div {
    width: 50%;
    /* height: 10rem; */
    display: flex;
    flex-direction: column;
    align-items: center;
    border-left: 1px solid black;
    padding: 1rem;
  }

  input {
    width: 10rem;
  }
`;
