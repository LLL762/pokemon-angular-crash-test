import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-base',
  template: ``
})
export class BaseComponent implements OnDestroy {
  
  ngUnsubscribe = new Subject<void>();
  
  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete(); 
  }

}
