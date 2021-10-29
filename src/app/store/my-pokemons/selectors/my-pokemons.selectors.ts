import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromMyPokemons from '../reducers/my-pokemons.reducer';

export const selectMyPokemonsState = createFeatureSelector<fromMyPokemons.State>(fromMyPokemons.myPokemonsFeatureKey);

export const selectMyPokemons = createSelector(
  selectMyPokemonsState,
  (state) => state.myPokemons,
);

export const selectIsMyPokemonsLoading = createSelector(
  selectMyPokemonsState,
  (state) => state.isLoading
);

