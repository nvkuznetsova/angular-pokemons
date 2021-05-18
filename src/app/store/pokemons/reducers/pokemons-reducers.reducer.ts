import { Action, createReducer, on } from '@ngrx/store';


export const pokemonsReducersFeatureKey = 'pokemons';

export interface State {
  isLoadig: boolean;
  pokemons: any;
  pokemonId: number;
}

export const initialState: State = {
  isLoadig: false,
  pokemons: [],
  pokemonId: null,
};


export const reducer = createReducer(
  initialState,

);

