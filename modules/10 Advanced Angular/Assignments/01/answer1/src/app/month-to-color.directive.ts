import { Directive } from '@angular/core';
import { ElementRef } from '@angular/core';
import { AfterViewInit, HostBinding, Renderer2} from '@angular/core';

@Directive({
  selector: '[appMonthToColor]'
})
export class MonthToColorDirective implements AfterViewInit{
  month: string;
  constructor(private renderer: Renderer2,private el: ElementRef) {
    this.month = "";
  }
  @HostBinding('style.color') color;
  ngAfterViewInit(){
    this.month = this.el.nativeElement.innerText;
    console.log(this.month);
    this.checkColorOfMonth();
  }
  checkColorOfMonth(){
    switch(this.month){
      case 'January':{
        this.renderer.setStyle(this.el.nativeElement, "color", 'red');
      }
      case 'February':{
        this.renderer.setStyle(this.el.nativeElement, "color", 'blue');
      }
      case 'March':{
        this.renderer.setStyle(this.el.nativeElement, "color", 'green');
      }
      case 'April':{
        this.renderer.setStyle(this.el.nativeElement, "color", 'black');
      }
      case 'May':{
        this.renderer.setStyle(this.el.nativeElement, "color", 'purple');
      }
      case 'June':{
        this.renderer.setStyle(this.el.nativeElement, "color", 'yellow');
      }
      case 'July':{
        this.renderer.setStyle(this.el.nativeElement, "color", 'pink');
      }
      case 'August':{
        this.renderer.setStyle(this.el.nativeElement, "color", 'gray');
      }
      case 'September':{
        this.renderer.setStyle(this.el.nativeElement, "color", 'brown');
      }
      case 'October':{
        this.renderer.setStyle(this.el.nativeElement, "color", 'cyan');
      }
      case 'November':{
        this.renderer.setStyle(this.el.nativeElement, "color", 'beige');
      }
      case 'December':{
        this.renderer.setStyle(this.el.nativeElement, "color", "orange");
      }
    }
  }
}
