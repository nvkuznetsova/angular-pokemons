import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromPokemons from '../reducers/pokemons-reducers.reducer';
import { selectRouteParam } from '../../';


const selectPokemonsState = createFeatureSelector<fromPokemons.State>(fromPokemons.pokemonsReducersFeatureKey);

export const selectIsPokemonsLoading = createSelector(
  selectPokemonsState,
  (state) => state.isLoading
);

export const selectPokemons = createSelector(
  selectPokemonsState,
  (state) => state.pokemons
);

export const selectIsLoading = createSelector(
  selectIsPokemonsLoading,
  (s1) => s1
);

export const selectPokemonById = createSelector(
  selectPokemons,
  selectRouteParam('id'),
  (pokemons, pokemonId) => pokemons.find((pokemon) => pokemon.id === +pokemonId)
);
