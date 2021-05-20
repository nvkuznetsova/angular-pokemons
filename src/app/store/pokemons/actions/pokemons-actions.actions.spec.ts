import * as fromPokemonsActions from './pokemons-actions.actions';

describe('loadPokemonsActionss', () => {
  it(fromPokemonsActions.pokemonsActionsType.GET_POKEMONS, () => {
    expect(fromPokemonsActions.getPokemons().type).toBe(fromPokemonsActions.pokemonsActionsType.GET_POKEMONS);
  });
});
