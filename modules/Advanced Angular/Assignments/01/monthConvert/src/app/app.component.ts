import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'monthConvert';
  value: string;
  onSubmit(e,value){
    e.preventDefault();
    this.value = value;
  }
}
