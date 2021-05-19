
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { PokemonsRoutingModule } from './pokemons-routing.module';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { PokemonPageComponent } from './components/pokemon-page/pokemon-page.component';


@NgModule({
  declarations: [
    PokemonComponent,
    PokemonListComponent,
    PokemonPageComponent
  ],
  imports: [
    CommonModule,
    PokemonsRoutingModule,
    MatCardModule,
    MatButtonModule,
  ]
})
export class PokemonsModule { }
