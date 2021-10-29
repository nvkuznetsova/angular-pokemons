import { InjectionToken } from '@angular/core';
import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import * as fromPokemons from './pokemons/reducers/pokemons-reducers.reducer';
import * as fromMyPokemons from './my-pokemons/reducers/my-pokemons.reducer';
import * as fromRouter from '@ngrx/router-store';

export const selectRouter = createFeatureSelector<State, fromRouter.RouterReducerState<any>>('router');

export const {
  selectCurrentRoute, // select the current route
  selectQueryParams, // select the current route query params
  selectQueryParam, // factory function to select a query param
  selectRouteParams, // select the current route params
  selectRouteParam, // factory function to select a route param
  selectRouteData, // select the current route data
  selectUrl, // select the current url
} = fromRouter.getSelectors(selectRouter);

export interface State {
  [fromPokemons.pokemonsReducersFeatureKey]: fromPokemons.State;
  [fromMyPokemons.myPokemonsFeatureKey]: fromMyPokemons.State;
  router: fromRouter.RouterReducerState<any>;
}

export const reducers: ActionReducerMap<State> = {
  [fromPokemons.pokemonsReducersFeatureKey]: fromPokemons.reducer,
  [fromMyPokemons.myPokemonsFeatureKey]: fromMyPokemons.reducer,
  router: fromRouter.routerReducer,
};

export const REDUCERS_TOKEN = new InjectionToken<ActionReducerMap<State>>('App Reducers');
export const reducerProvider = { provide: REDUCERS_TOKEN, useValue: reducers };
