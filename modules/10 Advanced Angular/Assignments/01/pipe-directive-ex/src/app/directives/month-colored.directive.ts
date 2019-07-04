import { Directive, HostBinding, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appMonthColored]'
})
export class MonthColoredDirective {

  colors: Object;
  @HostBinding('style.color') color:string;
  @HostBinding('style.border') border: string;
  @HostBinding('attr.value') value: string;

  constructor(private el: ElementRef) { 
    this.colors = {
      January: "red",
      February: "blue",
      March: "green",
      April: "black",
      May: "purple",
      June: "yellow",
      July: "pink",
      August: "gray",
      September: "brown",
      October: "cyan",
      November: "beige",
      December: "orange"
    };

    this.color = "black";
  }

  @HostListener('DOMCharacterDataModified') newColor() {
    let month = this.el.nativeElement.innerText;
    console.log(month);
    console.log(this.colors[month]);
    debugger
    if( month in this.colors) {
      this.color = this.colors[month];
      this.border = `${this.colors[month]} 2px solid`;
    }
  }

}
