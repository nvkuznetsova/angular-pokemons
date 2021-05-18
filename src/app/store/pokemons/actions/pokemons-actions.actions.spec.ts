import * as fromPokemonsActions from './pokemons-actions.actions';

describe('loadPokemonsActionss', () => {
  it('should return an action', () => {
    expect(fromPokemonsActions.loadPokemonsActionss().type).toBe('[PokemonsActions] Load PokemonsActionss');
  });
});
