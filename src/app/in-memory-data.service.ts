import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api'
import { Observable } from 'rxjs';
import { Pokemon } from './pokemon/pokemon';
import { POKEMONS } from './pokemon/pokemons-mock';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }
  createDb(): {} | Observable<{}> | Promise<{}> {

    const pokemons: Pokemon[] = POKEMONS;
    return { pokemons };
  }
}
