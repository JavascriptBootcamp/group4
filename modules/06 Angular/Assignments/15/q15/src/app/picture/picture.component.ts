import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.css']
})
export class PictureComponent{
@Input() image: string;
counter: number;

incCounter(): void{
  this.counter++;
}
  constructor() { 
    this.counter = 0;
  }


}
