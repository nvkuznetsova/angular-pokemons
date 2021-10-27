import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MyPokemon, Pokemon, CreatePokemon } from 'src/app/domain/pokemons';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {
  private pokemonsUrl = 'http://localhost:3000/pokemons';
  private myPokemonsUrl = 'http://localhost:3000/my-pokemons';

  constructor(private http: HttpClient) { }

  public getPokemons(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(this.pokemonsUrl);
  }

  public getPokemonById(id: number): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${this.pokemonsUrl}/${id}`);
  }

  public getMyPokemons(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(this.myPokemonsUrl);
  }

  public getMyPokemonById(id: number): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${this.myPokemonsUrl}/${id}`);
  }

  public catchPokemon(pokemon: CreatePokemon): Observable<MyPokemon> {
    return this.http.post<MyPokemon>(this.myPokemonsUrl, pokemon);
  }
}
