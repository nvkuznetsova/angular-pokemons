import { createAction, props } from '@ngrx/store';
import { MyPokemon } from 'src/app/domain/pokemons';

export enum myPokemonsActionsType {
  GET_MY_POKEMONS = '[MyPokemons] Get MyPokemonss',
  GET_MY_POKEMONS_SUCCESS = '[MyPokemons] Get MyPokemonss Success',
  GET_MY_POKEMONS_ERROR = '[MyPokemons] Get MyPokemonss Error',
}

export const getMyPokemons = createAction(
  myPokemonsActionsType.GET_MY_POKEMONS
);

export const getMyPokemonssSuccess = createAction(
  myPokemonsActionsType.GET_MY_POKEMONS_SUCCESS,
  props<{ data: MyPokemon[] }>()
);

export const getMyPokemonssError = createAction(
  myPokemonsActionsType.GET_MY_POKEMONS_ERROR,
  props<{ error: Error }>()
);
