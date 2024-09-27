import { Directive, HostBinding, HostListener, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appColorByMonth]'
})

export class ColorByMonthDirective implements OnInit {
  monthsToColorsCollection: any;
  monthsToColors: object;
  month: string;

  @HostBinding('style.color') color: string;
  @HostBinding('style.backgroundColor') backColor: string;


  constructor(private el: ElementRef, private renderer: Renderer2) {

    this.monthsToColorsCollection = new Map();
    this.monthsToColorsCollection.set('January', 'red');
    this.monthsToColorsCollection.set('February', 'blue');
    this.monthsToColorsCollection.set('March', 'green');
    this.monthsToColorsCollection.set('April', 'black');
    this.monthsToColorsCollection.set('May', 'purple');
    this.monthsToColorsCollection.set('June', 'yellow');
    this.monthsToColorsCollection.set('July', 'pink');
    this.monthsToColorsCollection.set('August', 'gray');
    this.monthsToColorsCollection.set('September', 'brown');
    this.monthsToColorsCollection.set('October', 'October');
    this.monthsToColorsCollection.set('November', 'beige');
    this.monthsToColorsCollection.set('December', 'orange');


    this.monthsToColors = {
      January: 'red',
      February: 'blue',
      March: 'green',
      April: 'black',
      May: 'purple',
      June: 'yellow',
      July: 'pink',
      August: 'gray',
      September: 'brown',
      October: 'cyan',
      November: 'beige',
      December: 'orange'
    };

  }

  ngOnInit() {}


  @HostListener('mouseenter') mouseEnter() {
    this.backColor = 'black';
  }
  @HostListener('mouseleave') mouseLeave() {
    this.backColor = 'transparent';
  }


  @HostListener('DOMCharacterDataModified', ['$event']) changeColorByMonth(event: Event) {
    const elem = this.el.nativeElement;
    const month = elem.innerText;
    this.color = this.monthsToColors[month];
    // this.color = this.monthsToColorsCollection.get(month);

    // this.getColorByMonth();
  }


  // // getColorByMonth() {
  // //   switch (this.month) {
  // //     case 'January': {
  // //       this.color = 'red';
  // //       // this.renderer.setStyle(this.el.nativeElement, 'background-color', 'red');
  // //       break;
  // //     }
  // //     case 'February': {
  // //       this.color = 'blue';
  // //       // this.renderer.setStyle(this.el.nativeElement, 'background-color', 'blue');
  // //       break;
  // //     }
  // //     case 'March': {
  // //       this.renderer.setStyle(this.el.nativeElement, 'background-color','green');
  // //       break;
  // //     }
  // //     case 'April': {
  // //       this.renderer.setStyle(this.el.nativeElement, 'background-color', 'black');
  // //       break;
  // //     }
  // //     case 'May': {
  // //       this.renderer.setStyle(this.el.nativeElement, 'background-color', 'purple');
  // //       break;
  // //     }
  // //     case 'June':{
  // //       this.renderer.setStyle(this.el.nativeElement, 'background-color', 'yellow');
  // //       break;
  // //     }
  // //     case 'July': {
  // //       this.renderer.setStyle(this.el.nativeElement, 'background-color', 'pink');
  // //       break;
  // //     }
  // //     case 'August': {
  // //       this.renderer.setStyle(this.el.nativeElement, 'background-color', 'gray');
  // //       break;
  // //     }
  // //     case 'September': {
  // //       this.renderer.setStyle(this.el.nativeElement, 'background-color', 'brown');
  // //       break;
  // //     }
  // //     case 'October': {
  // //       this.renderer.setStyle(this.el.nativeElement, 'background-color', 'cyan');
  // //       break;
  // //     }
  // //     case 'November':  {
  // //       this.renderer.setStyle(this.el.nativeElement, 'background-color', 'beige');
  // //       break;
  // //     }
  // //     case 'December': {
  // //       this.renderer.setStyle(this.el.nativeElement,"color",'orange');
  // //       break;
  // //     }
  // //     default:
  // //       this.color = 'black';
  // //       break;
  // //   }
  // // }


  
}
