import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { PkmService } from '../pkm.service';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrls: ['list-pokemon.component.css']
})
export class ListPokemonComponent implements OnInit {

  @ViewChild('main-container') searchBox: ElementRef;

  addPkmUrl: string = '/pokemons/add';
  pokemons: Pokemon[];


  constructor(private router: Router, private pkmService: PkmService) { }

  ngOnInit(): void {
    this.pkmService.getPkmList().subscribe(pkmList => this.pokemons = pkmList);
  }


  goToPkmDetails(pokemon: Pokemon): void {
    this.router.navigate([environment.pkmDetailBaseUrl, pokemon.id]);
  }

scroll() : void { 

  console.log('a');

}

}
