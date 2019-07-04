import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appcustom]'
})
export class CustomDirective {

  colors: string[]
  monthNames: string[]
  
  constructor(private el: ElementRef) {
    this.colors = ['red', 'blue', 'green', 'yellow', 'black', 'darksalmon', 'cyan', 'yellowgreen', 'lightblue', 'pink'];
    this.monthNames = ["January", "February", "March", "April", "May", "June",  "July", "August", "September", "October", "November", "December"];
  }
 


  @HostBinding('style.color') color:string;
  @HostBinding('style.border-color') borderColor: string;

  @HostListener('keydown') newColor() {
    let currentValue = this.el.nativeElement.value;
    this.color = this.colors[currentValue];
    this.borderColor = this.colors[currentValue];
  }

}
