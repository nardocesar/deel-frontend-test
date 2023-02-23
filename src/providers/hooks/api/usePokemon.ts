import axios from "axios";
import { useQuery } from "react-query";

interface Pokemon {
  count: number;
  next: string;
  previous: number;
  results: [
    {
      name: string;
      url: string;
    }
  ];
}

type ResponsePokemon = string[];

const filterPokemonList = (pokemonList: Pokemon): ResponsePokemon => {
  return pokemonList.results.map((pokemon) => pokemon.name);
};

export const usePokemon = () => {
  return useQuery<ResponsePokemon, Error>(["pokemon"], async () => {
    const response = await axios.get<Pokemon>(
      "https://pokeapi.co/api/v2/pokemon"
    );
    return filterPokemonList(response.data);
  });
};
