import React from "react";

import api from "../services/api";

const Calculator = (pokemonsA, pokemonsB) => {
  let baseExperienceA = [];
  let baseExperienceB = [];
  let totalA = 0;
  let totalB = 0;
  let loadingA = false;
  let loadingB = false;

  pokemonsA.forEach(async (pokemon) => {
    loadingA = true;
    await api
      .get(`/pokemon/${pokemon}`)
      .then((response) => {
        baseExperienceA = [...baseExperienceA, response.data.base_experience];
        loadingA = false;
      })
      .catch((error) => console.log(error));
  });
  pokemonsB.forEach(async (pokemon) => {
    loadingB = true;
    await api
      .get(`/pokemon/${pokemon}`)
      .then((response) => {
        baseExperienceB = [...baseExperienceB, response.data.base_experience];
        loadingB = false;
      })
      .catch((error) => console.log(error));
  });
  console.log(baseExperienceA, baseExperienceB);
  if (loadingA === false && loadingB === false) {
    console.log(baseExperienceA, baseExperienceB);
    totalA = baseExperienceA.reduce((totalA, value) => totalA + value, 0);
    totalB = baseExperienceA.reduce((totalB, value) => totalB + value, 0);
    console.log(totalA, totalB);
  }
  return <>{loadingA ? <p> Carregando</p> : <p> Carregou </p>};</>;
};

export default Calculator;
