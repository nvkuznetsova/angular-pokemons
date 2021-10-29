import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromPokemons from '../reducers/pokemons-reducers.reducer';
import { selectRouteParam } from '../../';
import { selectIsMyPokemonsLoading, selectMyPokemons } from '../../my-pokemons/selectors/my-pokemons.selectors';


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
  selectIsMyPokemonsLoading,
  (s1, s2) => s1 || s2
);

export const selectPokemonById = createSelector(
  selectPokemons,
  selectRouteParam('id'),
  (pokemons, pokemonId) => pokemons.find((pokemon) => pokemon.id === +pokemonId)
);

export const selectAllPokemons = createSelector(
  selectPokemons,
  selectMyPokemons,
  (pokemons, myPokemons) => pokemons.map((pokemon) => {
    const isCaught = myPokemons.find((p) => p.name === pokemon.name);
    return isCaught ? isCaught : pokemon;
  })
);
