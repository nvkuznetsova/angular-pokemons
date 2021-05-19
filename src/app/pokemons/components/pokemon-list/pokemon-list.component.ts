import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from 'src/app/domain/pokemons';
import { PokemonsService } from 'src/app/services/pokemons/pokemons.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  public pokemons: Observable<Pokemon[]>;

  constructor(private pokemonsService: PokemonsService) { }

  ngOnInit(): void {
    this.pokemons = this.pokemonsService.getPokemons();
  }

}
