import { Directive , HostBinding, ElementRef, AfterContentChecked} from '@angular/core';
import { log } from 'util';

@Directive({
  selector: '[appPaint]'
})
export class PaintDirective implements AfterContentChecked {

  @HostBinding('style.color') color: string;

  constructor(private el: ElementRef) { }

  ngAfterContentChecked() {
    this.colorSelection();
  }

  colorSelection() {
   
    switch (this.el.nativeElement.innerText) {
      case 'January':
        this.color = 'red';
        break;

      case 'February':
        this.color = 'blue';
        break;

      case 'March':
        this.color = 'green';
        break;

      case 'April':
        this.color = 'black';
        break;

      case 'May':
        this.color = 'purple';
        break;

      case 'June':
        this.color = 'yellow';
        break;

      case 'July':
        this.color = 'pink';
        break;

      case 'August':
        this.color = 'gray';
        break;

      case 'September':
        this.color = 'brown';
        break;

      case 'October':
        this.color = 'cyan';
        break;

      case 'November':
        this.color = 'beige';
        break;

      case 'December':
        this.color = 'orange';
        break;
    }
  }


 
}
