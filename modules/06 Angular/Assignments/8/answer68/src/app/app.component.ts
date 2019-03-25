import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'answer68';
  sentence="rail safety?fairy tales";

  display=this.sentence.split('?');
  sentence2='123rail safety?fairy tales' 
  display2=this.sentence2.split('?');

}
