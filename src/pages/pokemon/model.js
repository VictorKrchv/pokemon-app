import { createStore, createEffect, createEvent } from "effector";
import { pokemonsApi } from "../../api/pokemons";

export const $pokemonData = createStore({});

export const pageUnmounted = createEvent();
$pokemonData.reset(pageUnmounted);

export const fetchPokemonData = createEffect();
fetchPokemonData.use((id) => {
  return pokemonsApi.getPokemonByData(id);
});

export const loadPokemonData = createEvent();
loadPokemonData.watch((id) => {
  return fetchPokemonData(id);
});

$pokemonData.on(fetchPokemonData.doneData, (_, res) => {
  const stats = res.data.stats.map((stat) => ({
    base_stat: stat.base_stat,
    name: stat.stat.name,
  }));
  const types = res.data.types.map((type) => ({
    type: type.type,
  }));
  return {
    id: res.data.id,
    name: res.data.name,
    types,
    stats,
  };
});
