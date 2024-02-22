'use client'

import { useAppSelector } from '@/store';
import { PokemonGrid } from './PokemonGrid';
import favoritesPokemons from '@/store/pokemons/pokemons';
import { useEffect, useState } from 'react';
import { IoHeartOutline } from 'react-icons/io5';

export const PokemonFavorites = () => {

  const favoritesPokemons = useAppSelector( state => Object.values( state.pokemons.favorites ) );
  // const [pokemons, setPokemons] = useState( favoritesPokemons );

  // useEffect(() => {
    // setPokemons( favoritesPokemons )
  // }, [ favoritesPokemons ])
  
  
  return (
    <>
      {
        favoritesPokemons.length === 0
          ? (<NoFavorites />)
          : (<PokemonGrid pokemons={ favoritesPokemons }/>)
      }
    </>
  )
}

export const NoFavorites = () => {
  return (
    <div className="flex flex-col h-[50vh] items-center justify-center">
      <IoHeartOutline size={100} className="text-red-500"/>
      <span className="text-3xl font-semibold mt-5">No tienes pokemons favoritos</span>
    </div>
  )
}