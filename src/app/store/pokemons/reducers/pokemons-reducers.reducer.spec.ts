import { reducer, initialState, State } from './pokemons-reducers.reducer';
import * as fromPokemonsActions from '../actions/pokemons-actions.actions';

describe('PokemonsReducers Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toEqual(initialState);
    });
  });

  it('should start load pokemons', () => {
    const expected = {
      ...initialState,
      isLoading: true,
    } as State;
    const action = fromPokemonsActions.getPokemons();
    const result = reducer(initialState, action);

    expect(result).toEqual(expected);
  });

  it('should get pokemons', () => {
    const previousState = {
      ...initialState,
      isLoading: true,
    } as State;

    const expected = {
      ...previousState,
      isLoading: false,
      pokemons: [{ id: 5, name: 'test' }]
    } as State;

    const action = fromPokemonsActions.getPokemonsSuccess({ data: [{ id: 5, name: 'test' }] });

    const result = reducer(previousState, action);
    expect(result).toEqual(expected);
  });
});
