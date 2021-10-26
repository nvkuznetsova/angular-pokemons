
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { PokemonsRoutingModule } from './pokemons-routing.module';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { PokemonPageComponent } from './components/pokemon-page/pokemon-page.component';
import { MyPokemonsListComponent } from './components/my-pokemons-list/my-pokemons-list.component';


@NgModule({
  declarations: [
    PokemonComponent,
    PokemonListComponent,
    PokemonPageComponent,
    MyPokemonsListComponent
  ],
  imports: [
    CommonModule,
    PokemonsRoutingModule,
    MatCardModule,
    MatButtonModule,
  ]
})
export class PokemonsModule { }
