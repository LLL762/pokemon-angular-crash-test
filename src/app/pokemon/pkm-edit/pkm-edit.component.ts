import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PkmService } from '../pkm.service';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-pkm-edit',
  templateUrl: './pkm-edit.component.html',
  styleUrls: ['./pkm-edit.component.css']
})
export class PkmEditComponent implements OnInit {

  oldPokemon: Pokemon | undefined;
  pokemon: Pokemon | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pkmService: PkmService) { }

  ngOnInit(): void {
    const pokemonId: string | null = this.route.snapshot.paramMap.get('id');

    if (!pokemonId) {
      //TO DO : throw an error and handle it.
      return;
    }
    this.pkmService.getPkmById(+pokemonId).subscribe(dataPkm => { this.pokemon = dataPkm, this.oldPokemon = this.pokemon ? this.pkmService.createDeepCopy(this.pokemon) : undefined });

  }

}
