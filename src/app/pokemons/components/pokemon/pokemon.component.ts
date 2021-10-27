import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Pokemon } from 'src/app/domain/pokemons';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonComponent {
  @Input() pokemon: Pokemon;
  @Output() catchPokemon: EventEmitter<string> = new EventEmitter<string>();

  public get catchDate(): Date {
    return (this.pokemon as any)?.date ?? null;
  }

  public getPokemonImagePath(): string {
    const imageId = (this.pokemon.id <= 720) ? this.pokemon.id : this.pokemon.id % 100 + 1;
    return `././assets/pokemons/${imageId}.png`;
  }

  public onCatchPokemon(): void {
    this.catchPokemon.emit(this.pokemon.name);
  }
}
