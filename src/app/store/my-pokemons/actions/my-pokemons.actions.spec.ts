import * as fromMyPokemons from './my-pokemons.actions';

describe('loadMyPokemonss', () => {
  it('should return an action', () => {
    expect(fromMyPokemons.loadMyPokemonss().type).toBe('[MyPokemons] Load MyPokemonss');
  });
});
