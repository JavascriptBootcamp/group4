import { Directive,HostBinding,ElementRef,Renderer2,AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appMonth]'
})
export class MonthDirective implements AfterViewInit{
  colors:any ;
  months:string[];
  constructor(private el: ElementRef,private renderer:Renderer2) { 

      this.colors = {
        January : 'red', February :  'blue',
        March :'green',April :'black',
        May :'purple',June :'yellow',
        July :'pink',August :'gray',
        September :'brown',October :'cyan',November: 'beige',December :'orange'
      };
  }

  
  ngAfterViewInit() {

  this.renderer.setStyle(this.el.nativeElement,'color',this.colors[this.el.nativeElement.innerText])

  }
}
