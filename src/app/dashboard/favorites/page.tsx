import { PokemonsResponse, SimplePokemon, PokemonGrid } from "@/pokemons";

export const metadata = {
  title: 'Favoritos',
  description: 'Listado de pokemons favoritos'
}

export default async function PokemonsPage() {

  return (
    <div className="flex flex-col my-3 mx-5">

      <span className="text-5xl my-2">Pokémons Favoritos<small className="text-blue-500">Global State</small></span>

      <PokemonGrid pokemons={ [] } />

    </div>
  );
}