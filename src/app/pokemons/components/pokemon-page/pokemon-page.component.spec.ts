import { getMockStore, MockStore } from '@ngrx/store/testing';
import { PokemonPageComponent } from './pokemon-page.component';
import { State } from '../../../store';

describe('PokemonPageComponent', () => {
  let component: PokemonPageComponent;
  let mockStore: MockStore;

  beforeEach(() => {
    const { store, build } = setup();
    component = build();
    mockStore = store;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should change name', () => {
    component.onClick();
    expect(component.name).toBe('test');
  });
});

function setup() {
  const initialState = {
    pokemons: { pokemons: [{ id: 5, name: 'test' }] }
  } as State;
  const store = getMockStore<State>({ initialState });
  const builder = {
    store,
    default() {
      return builder;
    },
    build() {
      const component = new PokemonPageComponent(store);
      component.ngOnInit();
      return component;
    },
  };
  return builder;
}
