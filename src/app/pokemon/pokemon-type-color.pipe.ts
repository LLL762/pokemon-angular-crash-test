import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokemonTypeColor'
})
export class PokemonTypeColorPipe implements PipeTransform {

  transform(type: string): string {
    let color: string;

    switch (type) {
      case 'Feu':
        color = 'red';
        break;
      case 'Eau':
        color = 'blue';
        break;
      case 'Plante':
        color = 'green';
        break;
      case 'Insecte':
        color = 'brown';
        break;
      case 'Normal':
        color = 'grey';
        break;
      case 'Vol':
        color = 'teal';
        break;
      case 'Poison':
        color = 'purple';
        break;
      case 'Fée':
        color = 'pink';
        break;
      case 'Psy':
        color = 'purple';
        break;
      case 'Electrik':
        color = 'yellow';
        break;
      case 'Combat':
        color = 'orange';
        break;
      default:
        color = 'grey';
        break;
    }

    return 'background-color: ' + color + ';';
  }

}
