import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { debounceTime, distinctUntilChanged, filter, Observable, Subject, switchMap } from 'rxjs';
import { PkmService } from '../pkm.service';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-pkm-search',
  templateUrl: './pkm-search.component.html',
  styleUrls: ['./pkm-search.component.css']
})
export class PkmSearchComponent implements OnInit {

  //{.."a".."ab"..."abz"...}
  searchTerms = new Subject<string>();
  //{...pokemonLisdt(a)..pokemonList(ab)..}
  pokemons$: Observable<Pokemon[]>;

  constructor(private pkmService: PkmService, private router: Router) { }

  ngOnInit(): void {
    this.pokemons$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term => this.pkmService.searchPkmList(term)))
    );


  }

  search(term: string) {
    this.searchTerms.next(term);
  }

  goToDetail(pokemon: Pokemon) {
    const url = ['/pokemon', pokemon.id];
    this.router.navigate(url);
  }

}
