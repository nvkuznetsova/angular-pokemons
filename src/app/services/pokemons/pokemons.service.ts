import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pokemon } from 'src/app/domain/pokemons';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {
  private pokemonsUrl = 'http://localhost:3000/pokemons';

  constructor(private http: HttpClient) { }

  public getPokemons(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(this.pokemonsUrl);
  }

  public getPokemonById(id: number): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${this.pokemonsUrl}/${id}`);
  }
}
