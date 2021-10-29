import { createReducer, on } from '@ngrx/store';
import { MyPokemon } from 'src/app/domain/pokemons';
import * as fromMyPokemonsActions from '../actions/my-pokemons.actions';

export const myPokemonsFeatureKey = 'myPokemons';

export interface State {
  isLoading: boolean;
  myPokemons: MyPokemon[];
}

export const initialState: State = {
  isLoading: false,
  myPokemons: [],
};

export const reducer = createReducer(
  initialState,
  on(fromMyPokemonsActions.getMyPokemons, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(fromMyPokemonsActions.getMyPokemonssSuccess, (state, { data }) => ({
    ...state,
    isLoading: false,
    myPokemons: data,
  })),
  on(fromMyPokemonsActions.getMyPokemonssError, (state) => ({
    ...state,
    isLoading: false,
  }))
);

