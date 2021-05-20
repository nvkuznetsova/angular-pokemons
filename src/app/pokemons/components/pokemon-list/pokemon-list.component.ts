import { State } from './../../../store/index';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Pokemon } from 'src/app/domain/pokemons';
import { selectPokemons } from '../../../store/pokemons/selectors/pokemons-selectors.selectors';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  public pokemons$: Observable<Pokemon[]> = this.store.select(selectPokemons);

  constructor(private store: Store<State>) { }

  ngOnInit(): void {}

}
