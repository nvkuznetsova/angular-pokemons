import { switchMap, catchError, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { PokemonsService } from 'src/app/services/pokemons/pokemons.service';
import * as fromMyPokemonsActions from '../actions/my-pokemons.actions';
import { MyPokemon } from 'src/app/domain/pokemons';
import { of } from 'rxjs';


@Injectable()
export class MyPokemonsEffects {
  public getMyPokemonsEffect$ = createEffect(
    () => this.actions$.pipe(
      ofType(fromMyPokemonsActions.getMyPokemons),
      switchMap(() => this.pokemonsService.getMyPokemons().pipe(
        map((data: MyPokemon[]) => fromMyPokemonsActions.getMyPokemonssSuccess({ data })),
        catchError((error) => of(fromMyPokemonsActions.getMyPokemonssError({ error })))
      )),
    )
  );

  constructor(private actions$: Actions, private pokemonsService: PokemonsService) {}

}

