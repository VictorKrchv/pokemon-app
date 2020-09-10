import React, { useEffect } from "react";
import { PokemonCommonPage, PokemonInfo } from "../../features/pokemon";
import { useParams } from "react-router-dom";
import {
  loadPokemonData,
  $pokemonData,
  pageUnmounted,
  fetchPokemonData,
} from "./model";
import { useStore } from "effector-react";
import { Preloader } from "../../ui";

export const PokemonPage = () => {
  const id = useParams().id;
  useEffect(() => {
    loadPokemonData(id);
    return pageUnmounted;
  }, [id]);

  const pokemonData = useStore($pokemonData);
  const loading = useStore(fetchPokemonData.pending);

  return (
    <PokemonCommonPage>
      {loading ? <Preloader /> : <PokemonInfo pokemonData={pokemonData} />}
    </PokemonCommonPage>
  );
};
