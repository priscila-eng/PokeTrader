import React, { useEffect, useState } from "react";
import { FaArrowCircleLeft } from "react-icons/fa";

import { history } from "../../utils/history";
import { Teams, PokemonCard, Container, Header } from "./style";

const TradeHistory = () => {
  const [trades, setTrades] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const tradesHistory = JSON.parse(localStorage.getItem("pokemonA"));
    if (tradesHistory !== null) {
      setTrades(tradesHistory);
      setLoading(false);
    }
  }, [loading]);
  console.log(trades);

  return (
    <Container>
      {loading ? (
        <p className="Title"> Você não possui trocas ainda </p>
      ) : (
        <>
          <Header>
            <FaArrowCircleLeft
              title="Voltar"
              onClick={() => {
                history.push("/");
                window.location.reload();
              }}
            />
            <p> Trocas feitas por você </p>
          </Header>
          {trades.map((trade, index) => {
            return (
              <div key={index}>
                <p className="Title"> TROCA {index + 1} </p>
                <Teams>
                  <div className="Team">
                    {trade.pokemonA.map((pokemon, index) => {
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
                  <div className="Team">
                    {trade.pokemonB.map((pokemon, index) => {
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
                </Teams>
              </div>
            );
          })}
        </>
      )}
    </Container>
  );
};

export default TradeHistory;
