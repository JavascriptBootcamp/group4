import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'pipe-directive-ex';
  month: string;

  inputChange(value: string) {
    this.month = value;
  }

}
