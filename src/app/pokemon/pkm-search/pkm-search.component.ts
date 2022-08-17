import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
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


  @ViewChild('searchBox') searchBox: ElementRef;
  @ViewChild('searchBar') searchBar: ElementRef;

  //{.."a".."ab"..."abz"...}
  searchTerms = new Subject<string>();
  //{...pokemonLisdt(a)..pokemonList(ab)..}
  pokemons$: Observable<Pokemon[]>;

  constructor(private pkmService: PkmService, private router: Router, private renderer: Renderer2) { }

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


  selectSearchBox(): void {
    this.renderer.selectRootElement(this.searchBox["nativeElement"]).focus();
  }

  onFocusSearchBox(): void {
    this.renderer.addClass(this.searchBar["nativeElement"], 'outline');
  }
  onFocusOutSearchBox(): void {
    this.renderer.removeClass(this.searchBar["nativeElement"], 'outline');
  }


  goToDetail(pokemon: Pokemon) {
    const url = ['/pokemon', pokemon.id];
    this.router.navigate(url);
  }

}
