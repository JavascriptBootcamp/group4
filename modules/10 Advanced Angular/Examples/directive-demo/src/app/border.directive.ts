import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBorder]'
})
export class BorderDirective implements OnInit {

  constructor(private renderer: Renderer2, private el: ElementRef) { }

  ngOnInit() {
    // this.el.nativeElement.innerText = "Gabi is the king"
    const div = this.renderer.createElement("div");
    const text = this.renderer.createText("Something Something");
    this.renderer.addClass(this.el.nativeElement, "frame");

    this.renderer.appendChild(div, text);
    this.renderer.appendChild(this.el.nativeElement, div);

    this.renderer.setProperty(this.el.nativeElement, 'alt', 'Cat picture')
  }

}
