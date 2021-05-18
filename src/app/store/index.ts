import { InjectionToken } from '@angular/core';
import { ActionReducerMap } from '@ngrx/store';
import * as fromPokemons from './pokemons/reducers/pokemons-reducers.reducer';

export interface State {
  [fromPokemons.pokemonsReducersFeatureKey]: fromPokemons.State;
}

export const reducers: ActionReducerMap<State> = {
  [fromPokemons.pokemonsReducersFeatureKey]: fromPokemons.reducer
};

export const REDUCERS_TOKEN = new InjectionToken<ActionReducerMap<State>>('App Reducers');
export const reducerProvider = { provide: REDUCERS_TOKEN, useValue: reducers };
