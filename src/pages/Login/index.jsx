import React, { useState } from "react";

import apiUser from "../../services/apiUser";
import { history } from "../../utils/history";
import { Container, Error, Title } from "./style";

const Login = () => {
  const [username, setUsername] = useState();
  const [error, setError] = useState(false);

  const CreateUser = () => {
    if (username !== undefined) {
      apiUser
        .get(`/find_user/${username}`)
        .then(() => {
          alert("Ainda bem que você voltou");
          history.push("/calculator");
          window.location.reload();
        })
        .catch(() => {
          apiUser
            .post("/users", { username: username })
            .then(() => {
              alert("Bem vind@!");
              history.push("/calculator");
              window.location.reload();
            })
            .catch(() => {
              alert("Problema na requisição");
            });
        });
    } else {
      setError(true);
    }
  };

  return (
    <Container>
      <Title> Bem vind@ a PokeTrader</Title>
      <span> Entre e teste sua troca </span>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          CreateUser();
        }}
      >
        <label> Usuário </label>
        <div>
          <input
            type="text"
            onChange={(e) => setUsername(e.target.value)}
          ></input>
          <button> Entrar </button>
        </div>
        {error ? <Error> Digite um usuário </Error> : <></>}
      </form>
    </Container>
  );
};

export default Login;
