import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Pokemon } from 'src/app/domain/pokemons';
import { State } from 'src/app/store';
import { selectPokemons } from 'src/app/store/pokemons/selectors/pokemons-selectors.selectors';

@Component({
  selector: 'app-my-pokemons-list',
  templateUrl: './my-pokemons-list.component.html',
  styleUrls: ['./my-pokemons-list.component.scss']
})
export class MyPokemonsListComponent{
  public myPokemons$: Observable<Pokemon[]> = this.store.select(selectPokemons);

  constructor(private store: Store<State>) { }

}
