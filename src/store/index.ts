import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import counterReduce from './counter/counterSlice';
import pokemonsReduce from './pokemons/pokemons'; 
import { localStorageMiddlewware } from './middlewares/localstorage.middleware';

export const store = configureStore({
  reducer: {
    counter: counterReduce,
    pokemons: pokemonsReduce
  },
  // middleware: ( getDefaultMiddleware ) => getDefaultMiddleware()
  //   .concat( localStorageMiddlewware )
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector