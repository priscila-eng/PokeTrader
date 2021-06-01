import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #f0ffff;
  display: flex;
  flex-direction: column;
  align-items: center;

  span {
    font-size: 15px;
    color: darkblue;
    margin-bottom: 3rem;
  }

  form {
    height: 20rem;
    display: flex;
    flex-direction: column;
    border: 1px solid darkblue;
    background-color: #40c5af;
    border-radius: 8px;
    justify-content: center;
    padding: 0 2rem;
  }
  form label {
    color: darkblue;
  }
  form input {
    width: 12rem;
    height: 2rem;
    border: 1px solid darkblue;
    border-radius: 8px;
    margin-right: 0.5rem;
  }
  form button {
    background-color: white;
    color: darkblue;
    height: 2rem;
    cursor: pointer;
    border: 1px solid darkblue;
    border-radius: 5px;
    font-size: 13px;
  }
  form button:hover {
    background-color: #7fffd4;
  }
`;

export const Title = styled.p`
  font-size: 30px;
  color: #409ae1;
  line-height: 0.5rem;
  margin-top: 5rem;
`;

export const Error = styled.p`
  font-size: 12px;
  color: red;
  text-align: center;
`;
