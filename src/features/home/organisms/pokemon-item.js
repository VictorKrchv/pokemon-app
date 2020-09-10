import React from "react";
import { H4, PokemonImg } from "../../../ui";
import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";
import { ucFirst } from "./../../../lib/text-editors";

export const PokemonItem = ({ name, url, id }) => {
  return (
    <PokemomItemContainer>
      <Link to={`/pokemon/${id}`}>
        <PokemonImg id={id} />
      </Link>
      <p>№{id}</p>
      <H4>{ucFirst(name)}</H4>
    </PokemomItemContainer>
  );
};

const PokemomItemContainer = styled.li`
  flex-direction: column;
  display: flex;
  justify-content: center;
  flex: 0 1 16%;
  padding: 0 30px;
  margin-bottom: 10px;

  & > p {
    padding-top: 2px;
    color: #919191;
    font-size: 12px;
    font-weight: 600;
  }
`;

const Link = styled(RouterLink)`
  display: inline-block;
  background-color: rgba(240, 240, 240, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s linear;

  & > img {
    width: 100px;
    height: 100px;
  }

  &:hover {
    transform: translateY(-5px);
  }
`;
