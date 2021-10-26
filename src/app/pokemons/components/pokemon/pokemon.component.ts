import { Component, Input } from '@angular/core';
import { MyPokemon, Pokemon } from 'src/app/domain/pokemons';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent {
  @Input() pokemon: Pokemon;

  public get catchDate(): Date {
    return (this.pokemon as any)?.date ?? null;
  }

  public getPokemonImagePath(): string {
    const imageId = (this.pokemon.id <= 720) ? this.pokemon.id : this.pokemon.id % 100 + 1;
    return `././assets/pokemons/${imageId}.png`;
  }
}
