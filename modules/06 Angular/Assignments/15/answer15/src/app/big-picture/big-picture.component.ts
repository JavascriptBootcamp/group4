import { Component ,Input, Output, EventEmitter} from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-big-picture',
  templateUrl: './big-picture.component.html',
  styleUrls: ['./big-picture.component.css']
})
export class BigPictureComponent{
  @Input() passedImage:string;
  @Input() show:boolean;
  @Output() showChanged = new EventEmitter();
  constructor() {
  }
  hideBigScreen(){
    this.show = false;
    this.showChanged.emit(this.show);
    console.log("test");
  }
}
