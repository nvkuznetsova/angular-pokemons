import { createAction, props } from '@ngrx/store';
import { Pokemon } from 'src/app/domain/pokemons';

export enum pokemonsActionsType {
  GET_POKEMONS = '[Pokemons] Get Pokemons',
  GET_POKEMONS_SUCCESS = '[Pokemons] Get Pokemons Success',
  GET_POKEMONS_ERROR = '[Pokemons] Get Pokemons Error',
  CATCH_POKEMON = '[Pokemons] Catch Pokemon',
}

export const getPokemons = createAction(pokemonsActionsType.GET_POKEMONS);

export const getPokemonsSuccess = createAction(
  pokemonsActionsType.GET_POKEMONS_SUCCESS,
  props<{ data: Pokemon[] }>()
);

export const getPokemonsError = createAction(
  pokemonsActionsType.GET_POKEMONS_ERROR,
  props<{ error: any }>()
);

export const catchPokemon = createAction(pokemonsActionsType.CATCH_POKEMON, props<{ name: string }>());
