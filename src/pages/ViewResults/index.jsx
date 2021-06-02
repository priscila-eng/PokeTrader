import React, { useEffect, useState } from "react";

import { history } from "../../utils/history";
import { Container, PokemonCard, Title } from "./styles";

const ViewResults = () => {
  const [pokemonsA, setPokemonsA] = useState([]);
  const [pokemonsB, setPokemonsB] = useState([]);
  const [experienceA, setExperienceA] = useState(0);
  const [experienceB, setExperienceB] = useState(0);
  const [loadingA, setLoadingA] = useState(true);
  const [loadingB, setLoadingB] = useState(true);

  const ChangeExperience = () => {
    let soma = 0;
    let soma2 = 0;
    pokemonsA.forEach((pokemon) => {
      soma += pokemon.base_experience;
      setExperienceA(soma);
      setLoadingA(true);
    });
    pokemonsB.forEach((pokemon) => {
      soma2 += pokemon.base_experience;
      setExperienceB(soma2);
      setLoadingB(true);
    });
    setLoadingA(false);
    setLoadingB(false);
  };

  useEffect(() => {
    setPokemonsA(JSON.parse(localStorage.getItem("new_pokemonsA")));
    setPokemonsB(JSON.parse(localStorage.getItem("new_pokemonsB")));
    ChangeExperience();
  }, [loadingA, loadingB]);

  const HandleClick = () => {
    const historyPokemons = [];
    const auxiliar = JSON.parse(localStorage.getItem("pokemonA"));
    if (auxiliar != null) {
      historyPokemons.push(auxiliar);
    }
    localStorage.setItem(
      "pokemonA",
      JSON.stringify(
        historyPokemons.concat({
          pokemonA: pokemonsA,
          pokemonB: pokemonsB,
        })
      )
    );
    history.push("/calculator");
    window.location.reload();
    console.log(JSON.parse(localStorage.getItem("pokemonA")));
  };

  return (
    <Container>
      {loadingA && loadingB ? (
        <p> Carregando </p>
      ) : Math.abs(experienceA - experienceB) <= 100 ? (
        <Title titleColor="green"> TROCA JUSTA </Title>
      ) : (
        <Title> TROCA INJUSTA </Title>
      )}
      {loadingA && loadingB ? (
        <p> Carregando </p>
      ) : (
        <div className="Teams">
          <div>
            <p className="Title"> Experiência do time A: {experienceA} </p>
            <div className="Team">
              {pokemonsA.map((pokemon, index) => {
                return (
                  <PokemonCard teamColor="#409AE1" key={index}>
                    <p>
                      <b> Nome: </b> {pokemon.name}
                    </p>
                    <p>
                      <b> Experiência: </b> {pokemon.base_experience}
                    </p>
                    <p>
                      <b> Altura: </b> {pokemon.height}
                    </p>
                    <p>
                      <b> Peso: </b>
                      {pokemon.weight}
                    </p>
                  </PokemonCard>
                );
              })}
            </div>
          </div>
          <div>
            <p className="Title"> Experiência do time B: {experienceB} </p>
            <div className="Team">
              {pokemonsB.map((pokemon, index) => {
                return (
                  <PokemonCard key={index}>
                    <p>
                      <b> Nome: </b> {pokemon.name}
                    </p>
                    <p>
                      <b> Experiência: </b> {pokemon.base_experience}
                    </p>
                    <p>
                      <b> Altura: </b> {pokemon.height}
                    </p>
                    <p>
                      <b> Peso: </b>
                      {pokemon.weight}
                    </p>
                  </PokemonCard>
                );
              })}
            </div>
          </div>
          <button onClick={() => HandleClick()}> Continuar trocando </button>
        </div>
      )}
    </Container>
  );
};

export default ViewResults;
