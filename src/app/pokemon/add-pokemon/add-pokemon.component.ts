import { Component, OnInit } from '@angular/core';
import { PkmService } from '../pkm.service';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-add-pokemon',
  template: `

<h1>Ajouter un pokemon</h1>
<app-pkm-form [newPokemon]="pokemon"></app-pkm-form>
  `,
  styles: [
  ]
})
export class AddPokemonComponent implements OnInit {

  pokemon: Pokemon;

  constructor(private pkmService: PkmService) { }

  ngOnInit(): void {

    this.pokemon = this.pkmService.createDefaultPkm();

  }
}
