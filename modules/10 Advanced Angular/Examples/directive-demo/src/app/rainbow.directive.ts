import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appRainbow]'
})
export class RainbowDirective {

  colors: string[]

  constructor() {
    this.colors = ['red', 'blue', 'green', 'yellow', 'black', 'darksalmon', 'cyan', 'yellowgreen', 'lightblue', 'pink'];
  }

  @HostBinding('style.color') color:string;
  @HostBinding('style.border-color') borderColor: string;

  @HostListener('keydown') newColor() {
    const colorPick = Math.floor(Math.random() * this.colors.length);
    this.color = this.colors[colorPick];
    this.borderColor = this.colors[colorPick];
  }

}
