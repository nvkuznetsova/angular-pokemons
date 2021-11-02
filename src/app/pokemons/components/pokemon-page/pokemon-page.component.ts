import { State } from './../../../store/index';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from 'src/app/domain/pokemons';
import { Store } from '@ngrx/store';
import { selectPokemonById } from 'src/app/store/pokemons/selectors/pokemons-selectors.selectors';

@Component({
  selector: 'app-pokemon-page',
  templateUrl: './pokemon-page.component.html',
  styleUrls: ['./pokemon-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonPageComponent implements OnInit {
  public pokemon$: Observable<Pokemon> = this.store.select(selectPokemonById);
  public name = '';

  constructor(private store: Store<State>) { }

  ngOnInit(): void {}

  public onClick(): void {
    this.name = 'test';
  }

}
