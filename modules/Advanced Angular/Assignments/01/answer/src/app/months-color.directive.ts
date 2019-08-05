import { Directive, ElementRef, HostBinding, Renderer2, OnInit } from '@angular/core';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Directive({
  selector: '[appMonthsColor]'
})
export class MonthsColorDirective implements OnInit{
  months: object;
  constructor(private renderer: Renderer2, private el: ElementRef) {
    this.months = 
      {'January':'red',
      'February':'blue',
      'March':'green',
      'April':'black',
      'May':'purple',
      'June':'yellow',
      'July':'pink',
      'August':'gray',
      'September':'brown',
      'October':'cyan',
      'November':'beige',
      'December':'orange'}
    
   }
   ngOnInit(){
    this.renderer.setStyle(this.el.nativeElement, "color", this.months[this.el.nativeElement.innerText] );
   }




}
