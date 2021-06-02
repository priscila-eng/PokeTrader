import React, { useState } from "react";
import { FaHistory } from "react-icons/fa";

import {
  DisableA,
  DisableB,
  HandleSubmitA,
  HandleSubmitB,
  LimitPokemonA,
  LimitPokemonB,
} from "../../components/Pokemons";
import api from "../../services/apiPokemon";
import { history } from "../../utils/history";
import { Container, Team, Error } from "./style";

const Home = () => {
  const [valueA, setValueA] = useState();
  const [valueB, setValueB] = useState();
  const [pokemonsInfoA] = useState([]);
  const [pokemonsInfoB] = useState([]);
  const [pokemonsTeamA, setPokemonsTeamA] = useState([]);
  const [pokemonsTeamB, setPokemonsTeamB] = useState([]);
  const [pokemonTotalA, setPokemonTotalA] = useState(1);
  const [pokemonTotalB, setPokemonTotalB] = useState(1);
  const [disableA, setDisableA] = useState(false);
  const [disableB, setDisableB] = useState(false);
  const [loadingA, setLoadingA] = useState(true);
  const [loadingB, setLoadingB] = useState(true);
  const [errorA, setErrorA] = useState(false);
  const [errorB, setErrorB] = useState(false);

  const VerificationA = () => {
    if (valueA !== undefined) {
      setPokemonTotalA(LimitPokemonA(pokemonTotalA));
      setDisableA(DisableA(pokemonTotalA));
      setErrorA(false);
    } else {
      setErrorA(true);
    }
  };
  const VerificationB = () => {
    if (valueB !== undefined) {
      setPokemonTotalB(LimitPokemonB(pokemonTotalB));
      setDisableB(DisableB(pokemonTotalB));
      setErrorB(false);
    } else {
      setErrorB(true);
    }
  };

  const GetPokemonsInfo = (pokemonsA, pokemonsB) => {
    console.log(pokemonsA, pokemonsB);
    pokemonsA.map(async (pokemon) => {
      setLoadingA(true);
      if (pokemon !== undefined) {
        await api
          .get(`/pokemon/${pokemon}`)
          .then((response) => {
            pokemonsInfoA.push({
              name: pokemon,
              base_experience: response.data.base_experience,
              weight: response.data.weight,
              height: response.data.height,
            });
            setLoadingA(false);
          })
          .catch((error) => console.log(error));
      }
    });
    pokemonsB.forEach(async (pokemon) => {
      setLoadingB(true);
      if (pokemon !== undefined) {
        await api
          .get(`/pokemon/${pokemon}`)
          .then((response) => {
            pokemonsInfoB.push({
              name: pokemon,
              base_experience: response.data.base_experience,
              weight: response.data.weight,
              height: response.data.height,
            });
            setLoadingB(false);
          })
          .catch((error) => console.log(error));
      }
    });
  };
  const RedirectViewResults = () => {
    localStorage.setItem("new_pokemonsA", JSON.stringify(pokemonsInfoA));
    localStorage.setItem("new_pokemonsB", JSON.stringify(pokemonsInfoB));
    history.push("/results");
    window.location.reload();
  };

  return (
    <Container>
      <Team teamColor="#409AE1">
        <form
          onSubmit={(event) => {
            const pokemons = HandleSubmitA(event, valueA, pokemonsTeamA);
            setPokemonsTeamA(pokemons);
          }}
        >
          <label className="Team"> Time A </label>
          <div>
            <input
              disabled={disableA}
              type="text"
              onChange={(e) => setValueA(e.target.value)}
            ></input>
            <button
              disabled={disableA}
              type="submit"
              onClick={() => VerificationA()}
            >
              Adicionar
            </button>
          </div>
          {disableA ? (
            <Error> Limite máximo de pokemons por time atingido</Error>
          ) : (
            <></>
          )}
          {errorA ? <Error> Você deve adicionar um pokemon </Error> : <></>}
        </form>
        {pokemonsTeamA.map((pokemon, index) => (
          <dt key={index}>
            <p> {pokemon} </p>
          </dt>
        ))}
      </Team>
      <Team>
        <FaHistory
          className="icon"
          title="Visualizar histórico de trocas"
          onClick={() => {
            history.push("/history");
            window.location.reload();
          }}
        />
        <form
          onSubmit={(event) => {
            const pokemons = HandleSubmitB(event, valueB, pokemonsTeamB);
            setPokemonsTeamB(pokemons);
          }}
        >
          <label> Time B </label>
          <div>
            <input
              disabled={disableB}
              type="text"
              onChange={(e) => setValueB(e.target.value)}
            ></input>
            <button
              disabled={disableB}
              type="submit"
              onClick={() => VerificationB()}
            >
              Adicionar
            </button>
          </div>
          {disableB ? (
            <Error> Limite máximo de pokemons por time atingido</Error>
          ) : (
            <></>
          )}
          {errorB ? <Error> Você deve adicionar um pokemon </Error> : <></>}
        </form>
        {pokemonsTeamB.map((pokemon, index) => (
          <dt key={index}>
            <p> {pokemon} </p>
          </dt>
        ))}
        <div className="ButtonContainer">
          <button onClick={() => GetPokemonsInfo(pokemonsTeamA, pokemonsTeamB)}>
            Testar Troca
          </button>
          {loadingA && loadingB ? (
            <></>
          ) : (
            <button onClick={() => RedirectViewResults()}>Ver resultado</button>
          )}
        </div>
      </Team>
    </Container>
  );
};

export default Home;
