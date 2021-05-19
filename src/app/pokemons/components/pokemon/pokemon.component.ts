import { Component, Input } from '@angular/core';
import { Pokemon } from 'src/app/domain/pokemons';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent {
  @Input() pokemon: Pokemon;

  public getPokemonImagePath(): string {
    const imageId = (this.pokemon.id <= 720) ? this.pokemon.id : this.pokemon.id % 100 + 1;
    return `././assets/pokemons/${imageId}.png`;
  }

  constructor() { }
}
