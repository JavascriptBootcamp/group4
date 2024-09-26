import { Directive, ElementRef } from '@angular/core';
import { AfterViewChecked } from '@angular/core';

@Directive({
  selector: '[appPaintByMonth]'
})
export class PaintByMonthDirective implements AfterViewChecked {
  ngAfterViewChecked(): void {
    console.log(this.el.nativeElement.innerText);
    this.el.nativeElement.style.background = this.convertionObj[this.el.nativeElement.innerText];
  }

  convertionObj;
  constructor(private el: ElementRef) {
    this.convertionObj = {
      "January":"red",
      "February":"blue",
      "March":"green",
      "April":"black",
      "May":"purple",
      "June":"yellow",
      "July":"pink",
      "August":"gray",
      "September":"brown",
      "October":"cyan",
      "November":"beige",
      "December":"orange"
    }
    //el.nativeElement.
   }

}
