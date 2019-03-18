import { Component , OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  strArr: string[];
  
  ngOnInit () {
    let str:string = 'aaa bbbb asda 1331 ewe';
    this.strArr = str.split(" ");
  }
}

