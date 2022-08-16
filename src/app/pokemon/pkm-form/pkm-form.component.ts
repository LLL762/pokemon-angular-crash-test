import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { PkmService } from '../pkm.service';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-pkm-form',
  templateUrl: './pkm-form.component.html',
  styleUrls: ['./pkm-form.component.css']
})
export class PkmFormComponent implements OnInit {
  @Input() newPokemon: Pokemon;
  pkmTypes: string[];

  constructor(private pkmService: PkmService,

    private router: Router) { }

  ngOnInit(): void {

    this.pkmTypes = this.pkmService.getPkmTypeList();

  }

  selectType($event: Event, type: string) {

    const isChecked: boolean = ($event.target as HTMLInputElement).checked;
    let typeIndex: number;

    if (isChecked) {
      this.newPokemon.types.push(type);
    }
    else {
      typeIndex = this.newPokemon.types.indexOf(type);
      this.newPokemon.types.splice(typeIndex, 1);
    }
  }

  hasType(type: string): boolean {

    return this.newPokemon.types.includes(type);

  }

  isTypesValid(type: string): boolean {

    const nbTypes: number = this.newPokemon.types.length;

    if (nbTypes == 1 && this.hasType(type)) {
      return false;
    }

    if (nbTypes >= 3 && !this.hasType(type)) {
      return false;
    }

    return true
  }

  onSubmit(): void {
    if (this.isUpdate()) {
      this.pkmService.updatePkm(this.newPokemon).subscribe(
        () => {
          this.router.navigate(['/pokemon', this.newPokemon.id])
        }
      );
    }

    if (this.isCreate()) {
      this.pkmService.addPkm(this.newPokemon).subscribe(
        (pkm: Pokemon) => {
          this.router.navigate(['/pokemon', pkm.id])
        }
      );
    }
  }

  isUpdate(): boolean {
    return this.newPokemon.id != undefined &&
      this.router.url == `/${environment.pkmEditBaseUrl}/${this.newPokemon.id}`;
  }

  isCreate(): boolean {
    return this.newPokemon.id == undefined &&
      this.router.url == `/${environment.pkmAddUrl}`;
  }


}
