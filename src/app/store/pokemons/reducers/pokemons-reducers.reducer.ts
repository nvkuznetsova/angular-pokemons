import { Action, createReducer, on } from '@ngrx/store';
import { Pokemon } from 'src/app/domain/pokemons';
import * as fromPokemonsActions from '../actions/pokemons-actions.actions';


export const pokemonsReducersFeatureKey = 'pokemons';

export interface State {
  isLoading: boolean;
  pokemons: Pokemon[];
  pokemonId: number;
}

export const initialState: State = {
  isLoading: false,
  pokemons: [],
  pokemonId: null,
};


export const reducer = createReducer(
  initialState,
  on(fromPokemonsActions.getPokemons, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(fromPokemonsActions.getPokemonsSuccess, (state, { data }) => ({
    ...state,
    pokemons: data,
    isLoading: false
  })),
  on(fromPokemonsActions.getPokemonsError, (state) => ({
    ...state,
    isLoading: false,
  }))
);

