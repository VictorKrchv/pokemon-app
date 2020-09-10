import Axios from "axios"

const getPokemonList = (offset, count) => {
    return Axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${count}`)
}

const getPokemonByData = (data) => {
    return Axios.get(`https://pokeapi.co/api/v2/pokemon/${data}`)
}


export const pokemonsApi = {
    getPokemonList,
    getPokemonByData,
}