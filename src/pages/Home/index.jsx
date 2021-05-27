import React, { useState } from "react";

import Calculator from "../../components/Calculator";
import {
  DisableA,
  DisableB,
  HandleSubmitA,
  HandleSubmitB,
  LimitPokemonA,
  LimitPokemonB,
} from "../../components/Pokemons";
import { Container } from "./style";

const Home = () => {
  const [valueA, setValueA] = useState();
  const [valueB, setValueB] = useState();
  const [pokemonsTeamA, setPokemonsTeamA] = useState([]);
  const [pokemonsTeamB, setPokemonsTeamB] = useState([]);
  const [pokemonTotalA, setPokemonTotalA] = useState(1);
  const [pokemonTotalB, setPokemonTotalB] = useState(1);
  const [disableA, setDisableA] = useState(false);
  const [disableB, setDisableB] = useState(false);

  return (
    <Container>
      <div>
        <div className="Team">
          <form
            onSubmit={(event) => {
              const pokemons = HandleSubmitA(event, valueA, pokemonsTeamA);
              setPokemonsTeamA(pokemons);
            }}
          >
            <label> Time A </label>
            <input
              disabled={disableA}
              type="text"
              onChange={(e) => setValueA(e.target.value)}
            ></input>
            <button
              disabled={disableA}
              type="submit"
              onClick={() => {
                setPokemonTotalA(LimitPokemonA(pokemonTotalA));
                setDisableA(DisableA(pokemonTotalA));
              }}
            >
              Adicionar
            </button>
            {disableA ? (
              <p> Limite máximo de pokemons por time atingido</p>
            ) : (
              <></>
            )}
          </form>
          <ul>
            {pokemonsTeamA.map((pokemon, index) => (
              <li key={index}>
                <p> {pokemon} </p>
              </li>
            ))}
          </ul>
        </div>
        <div className="Team">
          <form
            onSubmit={(event) => {
              const pokemons = HandleSubmitB(event, valueB, pokemonsTeamB);
              setPokemonsTeamB(pokemons);
            }}
          >
            <label> Time B </label>
            <input
              disabled={disableB}
              type="text"
              onChange={(e) => setValueB(e.target.value)}
            ></input>
            <button
              disabled={disableB}
              type="submit"
              onClick={() => {
                setPokemonTotalB(LimitPokemonB(pokemonTotalB));
                setDisableB(DisableB(pokemonTotalB));
              }}
            >
              Adicionar
            </button>
            {disableB ? (
              <p> Limite máximo de pokemons por time atingido</p>
            ) : (
              <></>
            )}
          </form>
          <ul>
            {pokemonsTeamB.map((pokemon, index) => (
              <li key={index}>
                <p> {pokemon} </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <button onClick={() => Calculator(pokemonsTeamA, pokemonsTeamB)}>
          Testar Troca
        </button>
      </div>
    </Container>
  );
};

export default Home;
