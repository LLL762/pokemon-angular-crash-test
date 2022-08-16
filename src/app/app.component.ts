
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})

export default class AppComponent implements OnInit {


  notFoundMsg: string = 'Aucun pokemon trouvé';

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.


  }

  selectPokemonById(inputId: string): void {
    const id: number = +inputId;

  }




}
