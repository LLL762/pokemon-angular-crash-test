
import { DOCUMENT, ViewportScroller } from '@angular/common';
import { Component, Inject, OnInit} from '@angular/core';
import { BaseComponent } from './base/base.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})

export default class AppComponent extends BaseComponent implements OnInit {

    constructor(@Inject(DOCUMENT) private document : Document, private viewportScroller: ViewportScroller,){
      super();
    }
  
    ngOnInit(): void {
  }



isScrollDown(): boolean{
   
    return this.viewportScroller.getScrollPosition()?.[1]==0;

  }



  notFoundMsg: string = 'Aucun pokemon trouvé';

  scrollToTop() : void {
    this.viewportScroller.scrollToPosition([0, 0]);

  }
 

  selectPokemonById(inputId: string): void {
    const id: number = +inputId;

  }

  scroll() : void{

console.log('scroll');
  }


}


