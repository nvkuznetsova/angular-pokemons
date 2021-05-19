import { PokemonPageComponent } from './components/pokemon-page/pokemon-page.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'all-pokemons', component: PokemonListComponent },
  { path: 'pokemon/:id', component: PokemonPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokemonsRoutingModule { }
