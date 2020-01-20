import { Directive, HostBinding, HostListener, ElementRef, AfterViewChecked } from '@angular/core';

@Directive({
  selector: '[appMonthColored]'
})
export class MonthColoredDirective implements AfterViewChecked  {

  colors: Object;
  @HostBinding('style.color') color: string;
  @HostBinding('style.border') border: string;

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
  }

  ngAfterViewChecked() {
    let month = this.el.nativeElement.innerText;

    if (month in this.colors) {
      this.el.nativeElement.style.color = this.colors[month];
      this.el.nativeElement.style.border = `${this.colors[month]} 2px solid`;
    }
    else {
      this.el.nativeElement.style.color = "black";
      this.el.nativeElement.style.border = "none";
    }
  }

  // ############################## another way to implement the solution #########################

  // @HostListener('DOMCharacterDataModified') newColor() {
  //   let month = this.el.nativeElement.innerText;

  //   if (month in this.colors) {
  //     this.el.nativeElement.style.color = this.colors[month];
  //     this.el.nativeElement.style.border = `${this.colors[month]} 2px solid`;
  //   }
  //   else {
  //     this.el.nativeElement.style.color = "black";
  //     this.el.nativeElement.style.border = "none";
  //   }
  // }

}
