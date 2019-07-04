import { Directive, ElementRef ,AfterViewInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appPaintMonth]'
})
export class PaintMonthDirective implements AfterViewInit{

  constructor(private renderer : Renderer2,private el:ElementRef) { }

  ngAfterViewInit(){
    let month = this.el.nativeElement.innerText;
    this.renderer.addClass(this.el.nativeElement , month);
  }
}
