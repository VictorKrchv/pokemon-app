import React, { useEffect } from "react";
import {
  loadPokemonList,
  loadPokemonListData,
  $totalPages,
  PageChanged,
  $pokemonListToShow,
  $pageParams,
  pageUnmounted
} from "./model";
import { useStore } from "effector-react";
import { PokemonList, Pagination, HomeCommonPage } from "../../features/home";
import { Preloader } from "../../ui";

export const HomePage = () => {
  useEffect(() => {
    loadPokemonList();
    return pageUnmounted()
  }, []);

  const {currentPage} = useStore($pageParams)
  const totalPages = useStore($totalPages);
  const loading = useStore(loadPokemonListData.pending);
  const pokemonList = useStore($pokemonListToShow);

  return (
    <HomeCommonPage>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        count={5}
        onPageChanged={PageChanged}
        disabled={loading}
      />
      {loading ? <Preloader /> : <PokemonList pokemonList={pokemonList} />}
    </HomeCommonPage>
  );
};
