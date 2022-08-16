import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { PkmService } from '../pkm.service';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styleUrls: ['detail-pokemon.component.css']
})
export class DetailPokemonComponent implements OnInit {


  pokemon: Pokemon | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pkmService: PkmService
  ) { }

  ngOnInit(): void {

    const pokemonId: string | null = this.route.snapshot.paramMap.get('id');

    if (!pokemonId) {
      //TO DO : throw an error and handle it.
      return;
    }
    this.pkmService.getPkmById(+pokemonId).subscribe(dataPkm => this.pokemon = dataPkm);

  }

  goToPkmList(): void {
    this.router.navigate([environment.pkmListUrl]);
  }

  goToPkmEdit(pokemon: Pokemon) {

    this.router.navigate(['/pokemon/edit', pokemon.id]);

  }
  deletePkm(pokemon: Pokemon) {
    this.pkmService.deletePkmById(pokemon.id).subscribe(() => this.goToPkmList());

  }



}
