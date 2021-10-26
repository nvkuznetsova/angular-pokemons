import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonPageComponent } from './components/pokemon-page/pokemon-page.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { MyPokemonsListComponent } from './components/my-pokemons-list/my-pokemons-list.component';

const routes: Routes = [
  { path: 'all-pokemons', component: PokemonListComponent },
  { path: 'pokemon/:id', component: PokemonPageComponent },
  { path: 'my-pokemons', component: MyPokemonsListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokemonsRoutingModule { }
