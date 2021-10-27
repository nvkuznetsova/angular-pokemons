import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Pokemon } from 'src/app/domain/pokemons';
import { State } from 'src/app/store';

@Component({
  selector: 'app-my-pokemons-list',
  templateUrl: './my-pokemons-list.component.html',
  styleUrls: ['./my-pokemons-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MyPokemonsListComponent{
  public myPokemons$: Observable<Pokemon[]>;

  constructor() { }

}
