import { catchPokemon } from './../../../store/pokemons/actions/pokemons-actions.actions';
import { State } from './../../../store/index';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Pokemon } from 'src/app/domain/pokemons';
import { selectAllPokemons } from '../../../store/pokemons/selectors/pokemons-selectors.selectors';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonListComponent {
  public pokemons$: Observable<Pokemon[]> = this.store.select(selectAllPokemons);

  constructor(private store: Store<State>) { }

  public onCatchPokemon(name: string): void {
    this.store.dispatch(catchPokemon({ name }));
  }
}
