import { Directive,OnInit } from '@angular/core';
import { HostBinding } from '@angular/core';
import { ElementRef } from '@angular/core';
import { HostListener } from '@angular/core';
import { Renderer2 } from '@angular/core';
import { AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appMonthToColor]'
})
export class MonthToColorDirective implements AfterViewInit {
  month:string;
  constructor(private el:ElementRef,private renderer:Renderer2) { 
    this.month="";
  }
  @HostBinding('style.color') color;
  ngAfterViewInit(){
    this.month=this.el.nativeElement.innerText;
    this.checkMonthColor()
  }
  checkMonthColor(){
    switch(this.month){
      case 'January':{
        this.renderer.setStyle(this.el.nativeElement,"color",'red')
        break;
      }
      case 'February':{
        this.renderer.setStyle(this.el.nativeElement,"color",'blue')
        break;
      }      
      case 'March':{
        this.renderer.setStyle(this.el.nativeElement,"color",'green')
        break;
      }
      case 'April':{
        this.renderer.setStyle(this.el.nativeElement,"color",'black')
        break;
      }
      case 'May':{
        this.renderer.setStyle(this.el.nativeElement,"color",'purple')
        break;
      }
      case 'June':{
        this.renderer.setStyle(this.el.nativeElement,"color",'yellow')
        break;
      }
      case 'July':{
        this.renderer.setStyle(this.el.nativeElement,"color",'pink')
        break;
      }
      case 'August':{
        this.renderer.setStyle(this.el.nativeElement,"color",'gray')
        break;
      }
      case 'September':{
        this.renderer.setStyle(this.el.nativeElement,"color",'brown')
        break;
      }
      case 'October':{
        this.renderer.setStyle(this.el.nativeElement,"color",'cyan')
        break;
      }
      case 'November':{
        this.renderer.setStyle(this.el.nativeElement,"color",'beige')
        break;
      }
      case 'December':{
        this.renderer.setStyle(this.el.nativeElement,"color",'orange')
        break;
      }
    }
  }
  }

