import { PokemonsService } from 'src/app/services/pokemons/pokemons.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as fromPokemonsActions from '../actions/pokemons-actions.actions';
import { of } from 'rxjs';
import { catchError, switchMap, map } from 'rxjs/operators';

@Injectable()
export class PokemonsEffectsEffects {

  public pokemonsEffect$ = createEffect(
    () => this.actions$.pipe(
      ofType(fromPokemonsActions.getPokemons),
      switchMap(() => this.pokemonsService.getPokemons().pipe(
        map((data) => fromPokemonsActions.getPokemonsSuccess({ data })),
        catchError((error) => of(fromPokemonsActions.getPokemonsError({ error })))
      )),
    )
  );

  constructor(private actions$: Actions, private pokemonsService: PokemonsService) {}

}
