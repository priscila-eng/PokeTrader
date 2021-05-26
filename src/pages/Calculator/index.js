import { useState } from "react";
import { Container } from "./style";

const Calculator = () => {
  const [pokemons, setPokemons] = useState([]);
  const [value, setValue] = useState();
  const [pokemonTotal, setPokemonTotal] = useState(0);

  return (
    <Container>
      <div>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            setPokemons([...pokemons, value]);
          }}
        >
          <label> Time A </label>
          {pokemonTotal <= 0 && <p> Adicione um Pokemon </p>}
          {pokemonTotal > 6 && <p> Número máximo de entradas atingido </p>}
          {pokemonTotal <= 6 &&
            pokemons.map((pokemon, index) => (
              <li key={index}>
                <input
                  type="text"
                  onChange={(e) => setValue(e.target.value)}
                ></input>
              </li>
            ))}
          {pokemonTotal <= 6 && (
            <button
              type="submit"
              onClick={() => setPokemonTotal(pokemonTotal + 1)}
            >
              {" "}
              Adicionar Pokemon{" "}
            </button>
          )}
        </form>
      </div>
      <div>
        <form onSubmit={(event) => event.preventDefault()}>
          <label> Time B </label>
          <input type="text"></input>
        </form>
      </div>
    </Container>
  );
};

export default Calculator;
