import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';
import { PokemonItemDirective } from './pokemon-item.directive';
import { RouterModule, Routes } from '@angular/router';
import { PkmService } from './pkm.service';
import { FormsModule } from '@angular/forms';
import { PkmFormComponent } from './pkm-form/pkm-form.component';
import { PkmEditComponent } from './pkm-edit/pkm-edit.component';
import { environment } from 'src/environments/environment';
import { AddPokemonComponent } from './add-pokemon/add-pokemon.component';
import { PkmSearchComponent } from './pkm-search/pkm-search.component';
import { LoaderComponent } from './loader/loader.component';
import { AuthGuard } from '../auth.guard';

const pkmRoutes: Routes = [
  { path: environment.pkmListUrl, component: ListPokemonComponent },
  { path: environment.pkmDetailBaseUrl + '/:' + environment.pkmDetailPathVar, component: DetailPokemonComponent },
  { path: environment.pkmEditBaseUrl + '/:' + environment.pkmEditPathVar, component: PkmEditComponent, canActivate: [AuthGuard] },
  { path: environment.pkmAddUrl, component: AddPokemonComponent }
];


@NgModule({
  declarations: [
    ListPokemonComponent,
    DetailPokemonComponent,
    PokemonTypeColorPipe,
    PokemonItemDirective,
    PkmFormComponent,
    PkmEditComponent,
    AddPokemonComponent,
    PkmSearchComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(pkmRoutes)
  ],
  providers: [PkmService]
})
export class PokemonModule { }
