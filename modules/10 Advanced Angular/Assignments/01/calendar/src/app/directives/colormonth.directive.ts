import { Directive, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[appColormonth]'
})
export class ColormonthDirective {

  constructor(private renderer: Renderer2, private el: ElementRef) { }

  ngAfterViewChecked(): void {
    const month = this.el.nativeElement;
    month.className = "";
    switch (month.innerText) {
      case "January": {
        this.renderer.addClass(month, "red");
        break;
      }
      case "February": {
        this.renderer.addClass(month, "blue");
        break;
      }
      case "March": {
        this.renderer.addClass(month, "green");
        break;
      }
      case "April": {
        this.renderer.addClass(month, "black");
        break;
      }
      case "May": {
        this.renderer.addClass(month, "purple");
        break;
      }
      case "June": {
        this.renderer.addClass(month, "yellow");
        break;
      }
      case "July": {
        this.renderer.addClass(month, "pink");
        break;
      }
      case "August": {
        this.renderer.addClass(month, "gray");
        break;
      }
      case "September": {
        this.renderer.addClass(month, "brown");
        break;
      }
      case "October": {
        this.renderer.addClass(month, "cyan");
        break;
      }
      case "November": {
        this.renderer.addClass(month, "beige");
        break;
      }
      case "December": {
        this.renderer.addClass(month, "orange");
        break;
      }
      default: {
        break;
      }
    }
  }
}
