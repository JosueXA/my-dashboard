'use client'

import { PokemonsResponse, SimplePokemon, PokemonGrid } from "@/pokemons";
import { useEffect } from 'react';

// export const metadata = {
//   title: 'Listado de Pokemons',
//   description: 'La primera generación de pokemons'
// }


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

// TODO: realiza una petición para las generaciones que faltan
const generaciones = [
  {
    gen: 'Generación 1',
    limit: 151,
    offset: 0
  },{
    gen: 'Generación 2',
    limit: 100,
    offset: 151
  },{
    gen: 'Generación 3',
    limit: 135,
    offset: 251
  },{
    gen: 'Generación 4',
    limit: 135,
    offset: 386
  },{
    gen: 'Generación 5',
    limit: 156,
    offset: 521
  },{
    gen: 'Generación 6',
    limit: 72,
    offset: 677
  },{
    gen: 'Generación 7',
    limit: 88,
    offset: 749
  },{
    gen: 'Generación 8',
    limit: 69,
    offset: 837
  },{
    gen: 'Generación 9',
    limit: 103,
    offset: 905
  }
]

export default async function PokemonsPage() {
  
  const pokemons = await getPokemons(151);

  const generations = await getPokemons( generaciones[1].limit , generaciones[1].offset );

  return (
    <div className="flex flex-col my-3 mx-5">

      <span className="text-5xl my-2 text-blue-500">Listado de Pokémons</span>

      <p>Estás visulizando los pokémons de la { generaciones[0].gen }</p>

      <div className="flex items-center justify-center">
        <label htmlFor="gene">Selecciona la generación que quires ver</label>
        <select 
          className="outline-none focus:outline-none p-2 bg-white rounded-3xl" 
          name="generation" 
          id="gene">
            {
              generaciones.map( ({ gen }, i) => (
                <option key={ i } value={ gen }>{ gen }</option>
              ))
            }
        </select>
      </div>

      <PokemonGrid pokemons={ pokemons } />

    </div>
  );
}