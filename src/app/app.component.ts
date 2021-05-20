import { selectIsLoading } from './store/pokemons/selectors/pokemons-selectors.selectors';
import { getPokemons } from './store/pokemons/actions/pokemons-actions.actions';
import { State } from './store/index';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public title = 'angular-pokemons';
  public isLoading$ = this.store.select(selectIsLoading);

  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    this.store.dispatch(getPokemons());
  }
}
