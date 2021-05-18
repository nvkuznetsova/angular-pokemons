import { createAction, props } from '@ngrx/store';

export const loadPokemonsActionss = createAction(
  '[PokemonsActions] Load PokemonsActionss'
);

export const loadPokemonsActionssSuccess = createAction(
  '[PokemonsActions] Load PokemonsActionss Success',
  props<{ data: any }>()
);

export const loadPokemonsActionssFailure = createAction(
  '[PokemonsActions] Load PokemonsActionss Failure',
  props<{ error: any }>()
);
