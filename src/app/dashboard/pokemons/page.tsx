
import { PokemonsResponse, SimplePokemon, PokemonGrid } from "@/pokemons";
import { useEffect } from 'react';

export const metadata = {
  title: 'Listado de Pokemons',
  description: 'La primera generación de pokemons'
}


const getPokemons = async ( limit = 20, offset = 0):Promise<SimplePokemon[]> => {
  const data: PokemonsResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${ limit }&offset=${ offset }`)
    .then( res => res.json() );

    // console.log(data);

    const pokemons = data.results.map( pokemon => ({
      id: pokemon.url.split('/').at(-2)!,
      name: pokemon.name,
    }));

    // throw new Error('Esto es un error que no debería de suceder');
    // throw notFound();

    return pokemons;
}



export default async function PokemonsPage() {
  
  const pokemons = await getPokemons(151);

  // Se hace la petición de forma dináimica 
  // const generations = await getPokemons( limitGeneration , offsetGeneration );

  return (
    <div className="flex flex-col my-3 mx-5">

      <span className="text-5xl my-2 text-blue-500">Listado de Pokémons</span>

      {/* TODO: Realizar un componente para utilizar el use cliente de forma modular */}
      

      <PokemonGrid pokemons={ pokemons } />

    </div>
  );
}