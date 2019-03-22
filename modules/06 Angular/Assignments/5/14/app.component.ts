import { Component ,OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'switch';
  foods:string[] = ['hamburger', 'BBQ', 'salad'];
  beverages:string[] = ['beer', 'vodka', 'coke'];
   colors:string[] = ['blue', 'green', 'black'];


  ngOnInit(){

  }

  switchSuffix(num:number):string{
    switch(num) {
        case 1:
            return 'st'
        case 2:
            return 'nd'
        case 3:
            return 'rd';
        case 4:
            return 'th';
    }
}
}
