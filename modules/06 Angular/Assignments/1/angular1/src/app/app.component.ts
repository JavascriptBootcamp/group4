import { Component , OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  x:number = 5;
  ngOnInit(){
    let x2 = this.x;
    x2 = ++x2;
    x2 = ++x2;
    x2 = ++x2;
    x2 = ++x2;
    x2 = ++x2;
    this.x = x2;
  }
}
