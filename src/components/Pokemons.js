export const AddPokemons = (pokemons, value) => {
  const pokemonsList = [...pokemons, value];
  return pokemonsList;
};

export const LimitPokemonA = (total) => {
  const pokemonTotal = total + 1;
  return pokemonTotal;
};

export const DisableA = (total) => {
  if (total >= 6) {
    const disable = true;
    return disable;
  }
};

export const LimitPokemonB = (total) => {
  const pokemonTotal = total + 1;
  return pokemonTotal;
};

export const DisableB = (total) => {
  if (total >= 6) {
    const disable = true;
    return disable;
  }
};

export const HandleSubmitA = (event, value, pokemons) => {
  event.preventDefault();
  const auxiliar = AddPokemons(pokemons, value);
  return auxiliar;
};
export const HandleSubmitB = (event, value, pokemons) => {
  event.preventDefault();
  const auxiliar = AddPokemons(pokemons, value);
  return auxiliar;
};
