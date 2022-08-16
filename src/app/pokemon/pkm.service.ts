import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { catchError, Observable, of, tap } from 'rxjs';
import { Pokemon } from './pokemon';

@Injectable()
export class PkmService {
  constructor(private http: HttpClient) { }

  getPkmList(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>('api/pokemons').pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, undefined)));

  }

  getPkmById(id: number): Observable<Pokemon | undefined> {
    return this.http.get<Pokemon>(`api/pokemons/${id}`).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, undefined))
    )
  }

  getPkmByID(route: ActivatedRoute, pokemon: Pokemon | undefined): void {

    const pokemonId: string | null = route.snapshot.paramMap.get('id');

    if (!pokemonId) {
      //TO DO : throw an error and handle it.
      return;
    }
    this.getPkmById(+pokemonId).subscribe(dataPkm => pokemon = dataPkm);
  }

  addPkm(pokemon: Pokemon): Observable<Pokemon> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }

    return this.http.post<Pokemon>('api/pokemons', pokemon, httpOptions).pipe(
      tap((response) => this.log(response)),
      catchError(error => this.handleError(error, null))
    );

  }


  updatePkm(pokemon: Pokemon): Observable<null> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }

    return this.http.put('api/pokemons', pokemon, httpOptions).pipe(
      tap((response) => this.log(response)),
      catchError(error => this.handleError(error, null))
    );
  }

  deletePkmById(pkmId: number): Observable<null> {
    return this.http.delete(`api/pokemons/${pkmId}`).pipe(
      tap((response) => this.log(response)),
      catchError(error => this.handleError(error, null))
    );

  }

  searchPkmList(term: string): Observable<Pokemon[]> {

    if (term.length <= 1) {

      return of([]);
    }


    return this.http.get<Pokemon[]>(`api/pokemons/?name=${term}`)
      .pipe(
        tap((response) => this.log(response)),
        catchError(error => this.handleError(error, []))
      );


  }


  createDeepCopy(pkm: Pokemon): Pokemon {
    return new Pokemon(
      pkm.name,
      pkm.hp,
      pkm.cp,
      pkm.iconUrl,
      pkm.types,
      pkm.created,
      pkm.id
    )
  }

  createDefaultPkm(): Pokemon {
    return new Pokemon(
      'Entrer un nom',
      100,
      10,
      'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/xxx.png',
      ['Normal'],
      new Date()
    );
  }

  private log(response: any): void {
    console.table(response);
  }

  private handleError(error: Error, errorValue: any) {
    console.error(error);
    return of(errorValue);

  }


  getPkmTypeList(): string[] {

    return [
      'Plante',
      'Feu',
      'Eau',
      'Insecte',
      'Normal',
      'Electrik',
      'Poison',
      'Fée',
      'Vol',
      'Combat',
      'Psy'
    ]
  };




}
