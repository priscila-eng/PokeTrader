import React, { useState } from "react";

const TeamA = () => {
  const [pokemons, setPokemons] = useState([]);
  const [value, setValue] = useState();
  const [pokemonTotal, setPokemonTotal] = useState(1);
  const [disable, setDisable] = useState(false);

  const AddPokemon = () => {
    setPokemonTotal(pokemonTotal + 1);
    if (pokemonTotal >= 6) {
      setDisable(true);
    }
  };

  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          setPokemons([...pokemons, value]);
        }}
      >
        <label> Time B </label>
        <input
          disabled={disable}
          type="text"
          onChange={(e) => setValue(e.target.value)}
        ></input>
        <button disabled={disable} type="submit" onClick={() => AddPokemon()}>
          Adicionar
        </button>
        {disable ? <p> Limite máximo de pokemons atingido</p> : <></>}
      </form>
      <ul>
        {pokemons.map((pokemon, index) => (
          <li key={index}>
            <p> {pokemon} </p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TeamA;
