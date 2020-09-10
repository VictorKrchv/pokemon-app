import React from "react";
import { PokemonItem } from "./pokemon-item";
import styled from "styled-components";

export const PokemonList = ({ pokemonList }) => {
  return (
    <PokemonListContainer>
      {pokemonList.length
        ? pokemonList.map((item) => {
            return (
              <PokemonItem
                key={item.id}
                name={item.name}
                url={item.url}
                id={item.id}
              />  
            );
          })
        : <div>No Result</div>}
    </PokemonListContainer>
  );
};

const PokemonListContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;
