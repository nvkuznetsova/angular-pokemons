export interface Pokemon {
  id: number;
  name: string;
}

export interface MyPokemon extends Pokemon {
  date: Date;
}

export interface CreatePokemon {
  name: string;
  date: Date;
}
