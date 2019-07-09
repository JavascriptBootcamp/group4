import { Directive ,Renderer2, OnInit,ElementRef} from '@angular/core';

@Directive({
  selector: '[appSmallImg]'
})
export class SmallImgDirective implements OnInit {

  constructor(private renderer:Renderer2,private el:ElementRef) { }

  ngOnInit(){
    console.log(this.el.nativeElement)
    this.renderer.addClass(this.el.nativeElement,"smallImg");

  }

}
