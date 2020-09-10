import React from "react";
import { H3, Row} from "../../../ui";
import styled from "styled-components";
import { TypeItem } from "../atoms/type-item";

export const PokemonTypesList = ({ types }) => {
  return (
    <PokemonTypesListBox>
      <H3 margin="0 0 10px">Types</H3>
      <Row gap="10px">
        {types &&
          types.map((type, i) => {
            return <TypeItem key={i} value={type.type.name} />;
          })}
      </Row>
    </PokemonTypesListBox>
  );
};

const PokemonTypesListBox = styled.div``;
