import React from "react";
import { H2, Row, Col, PokemonImg } from "../../../ui";
import { ucFirst } from "../../../lib/text-editors";
import styled from "styled-components";
import { PokemonTypesList } from "./pokemon-types";
import { PokemonStatsList } from "./pokemon-stats";

export const PokemonInfo = ({ pokemonData }) => {
  return (
    <PokemonInfoBox>
      <PokemonTitle>
        <H2>{ucFirst(pokemonData.name)}</H2>
        <span>№{pokemonData.id}</span>
      </PokemonTitle>

      <Row margin="20px 0 0" gap="20px">
        <Col align="flex-end" basis="50%">
          <PokemonImg id={pokemonData.id} w="200px" h="200px" />
        </Col>

        <Col>
          <PokemonTypesList types={pokemonData.types} />
          <PokemonStatsList stats={pokemonData.stats} />
        </Col>
      </Row>
    </PokemonInfoBox>
  );
};

const PokemonInfoBox = styled.div`
  padding: 0 200px;
`;

const PokemonTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  & > span {
    margin-left: 12px;
    font-size: 22px;
    color: #919191;
    font-weight: 600;
  }
`;

// const PokemonImg = styled.div`
//   display: inline-block;
//   background-color: rgba(240, 240, 240, 0.3);
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   & > img {
//     width: 200px;
//     height: 200px;
//   }
// `;
