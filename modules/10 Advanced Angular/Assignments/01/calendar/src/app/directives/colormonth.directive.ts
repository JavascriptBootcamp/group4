import { Directive, Renderer2, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appColormonth]'
})
export class ColormonthDirective {

  constructor(private renderer: Renderer2, private el: ElementRef) { }

  @HostListener('onload') addColor() {
    const month = this.el.nativeElement;
    console.log(month);
    switch (month) {
      case "January": {
        this.renderer.addClass(this.el.nativeElement, "red");
        break;
      }
      case "February": {
        this.renderer.addClass(this.el.nativeElement, "blue");
        break;
      }
      case "March": {
        this.renderer.addClass(this.el.nativeElement, "green");
        break;
      }
      case "April": {
        this.renderer.addClass(this.el.nativeElement, "black");
        break;
      }
      case "May": {
        this.renderer.addClass(this.el.nativeElement, "purple");
        break;
      }
      case "June": {
        this.renderer.addClass(this.el.nativeElement, "yellow");
        break;
      }
      case "July": {
        this.renderer.addClass(this.el.nativeElement, "pink");
        break;
      }
      case "August": {
        this.renderer.addClass(this.el.nativeElement, "gray");
        break;
      }
      case "September": {
        this.renderer.addClass(this.el.nativeElement, "brown");
        break;
      }
      case "October": {
        this.renderer.addClass(this.el.nativeElement, "cyan");
        break;
      }
      case "November": {
        this.renderer.addClass(this.el.nativeElement, "beige");
        break;
      }
      case "December": {
        this.renderer.addClass(this.el.nativeElement, "orange");
        break;
      }
      default: {
        break;
      }
    }
  }
}
