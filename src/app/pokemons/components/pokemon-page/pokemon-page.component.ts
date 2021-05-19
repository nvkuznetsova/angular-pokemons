import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Pokemon } from 'src/app/domain/pokemons';
import { PokemonsService } from 'src/app/services/pokemons/pokemons.service';

@Component({
  selector: 'app-pokemon-page',
  templateUrl: './pokemon-page.component.html',
  styleUrls: ['./pokemon-page.component.scss']
})
export class PokemonPageComponent implements OnInit {
  public pokemon: Observable<Pokemon>;

  constructor(private pokemonsService: PokemonsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.pokemon = this.route.params.pipe(
      map((p) => p.id),
      switchMap((id) => this.pokemonsService.getPokemonById(id))
    );
  }

}
