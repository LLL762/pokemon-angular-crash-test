import { Directive, ElementRef, HostListener, Input } from '@angular/core';

const baseColor: string = '#b5b2b2';
const hoverColorDefault: string = 'teal';

@Directive({
  selector: '[pkmnPokemonItem]'
})
export class PokemonItemDirective {

  constructor(private elementRef: ElementRef) {
    this.setBorder(baseColor);
  }

  @Input('pkmnPokemonItem') borderColor: string;


  @HostListener('mouseenter') onMouseEnter() {
    this.setBorder(this.borderColor || hoverColorDefault);
  }

  @HostListener('mouseleave') onMouseExit() {
    this.setBorder(baseColor);
  }


  private setBorder(color: string) {
    this.elementRef.nativeElement.style.border = `solid 4px ${color}`

  }




}
