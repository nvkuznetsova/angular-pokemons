import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { catchPokemon } from 'src/app/store/pokemons/actions/pokemons-actions.actions';

import { PokemonListComponent } from './pokemon-list.component';

describe('PokemonListComponent', () => {
  let component: PokemonListComponent;
  let fixture: ComponentFixture<PokemonListComponent>;
  let mockStore: MockStore;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonListComponent ],
      providers: [provideMockStore({ initialState: {} })],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonListComponent);
    mockStore = TestBed.inject(MockStore);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch `catchPokemon` action', () => {
    const expected = catchPokemon({ name: 'testPokemon' });
    const dispatchSpy = spyOn(mockStore, 'dispatch');

    component.onCatchPokemon('testPokemon');
    expect(dispatchSpy).toHaveBeenCalledWith(expected);
  });
});
