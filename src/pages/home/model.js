import { $searchValue, valueChanged } from "../../features/header";

import {
  createStore,
  createEvent,
  createEffect,
  combine,
  createStoreObject,
} from "effector";
import { pokemonsApi } from "../../api/pokemons";

export const $pageParams = createStoreObject({
  offset: 0,
  count: 25,
});

const $currentPages = createStoreObject({
  onFilter: null,
  withoutFilter: 1,
});

export const $currentPage = $currentPages.map((pages) => {
  return pages.onFilter || pages.withoutFilter;
});

export const $pokemonList = createStore([]);

export const loadPokemonListData = createEffect({
  handler: async () => {
    return pokemonsApi.getPokemonList(0, 10000);
  },
});

export const loadPokemonList = createEvent();
loadPokemonList.watch(() => {
  if ($pokemonList.getState().length) {
    return;
  }
  return loadPokemonListData();
});

$pokemonList.on(loadPokemonListData.doneData, (_, res) =>
  res.data.results.map((item) => {
    const id = item.url.split("/pokemon/")[1].slice(0, -1);
    return { ...item, id };
  })
);

const $filteredList = combine(
  $pokemonList,
  $searchValue,
  (list, searchValue) => {
    return list.filter((item) => {
      if (!searchValue) return list;
      return item.name.includes(searchValue) || item.id.includes(searchValue);
    });
  }
);

const $totalCount = $filteredList.map((list) => list.length);

export const $pokemonListToShow = combine(
  $currentPage,
  $filteredList,
  $pageParams,
  (currentPage, list, params) => {
    const startFrom = currentPage * params.count - params.count;
    return list.slice(startFrom, startFrom + params.count);
  }
);

export const $totalPages = combine(
  $pageParams,
  $totalCount,
  ({ count }, totalCount) => Math.ceil(totalCount / count)
);

export const PageChanged = createEvent();

$currentPages.on(PageChanged, (state, page) => {
  if (state.onFilter) return { ...state, onFilter: page };
  return { ...state, withoutFilter: page };
});

$currentPages.on(valueChanged, (state, e) => {
  const value = e.target.value;
  if (!value) {
    return { ...state, onFilter: null };
  }
  return { ...state, onFilter: 1 };
});

export const pageUnmounted = createEvent();
$pageParams.reset(pageUnmounted);
