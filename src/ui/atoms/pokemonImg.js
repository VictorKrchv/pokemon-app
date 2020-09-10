import React from "react";
import styled from "styled-components";

export const PokemonImg = ({ id, w, h }) => {
  if (!id) return null;

  return (
    <Img
      width={w}
      height={h}
      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png
    `}
    />
  );
};

const Img = styled.img`
  background-color: rgba(240, 240, 240, 0.3);
  width: ${(p) => (p.width ? p.width : "100px")};
  height: ${(p) => (p.height ? p.height : "100px")};
`;
