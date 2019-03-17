import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Answer';
  food: string[] = ['hamburger', 'BBQ', 'salad'];
  beverage: string[] = ['beer', 'vodka', 'coke'];
  colors: string[] = ['blue', 'green', 'black'];
  // let str = '';
  // let suffix;
  // let i;
  
  switchSuffix(num){
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
  ngOnInit(){  
    
    // for(i = 0; i < food.length; i++){
    //     str += 'My ' + (i+1) + switchSuffix(i + 1) + ' choice is ' + food[i];
    //     if(i !== food.length - 1){
    //         str += ', '
    //     }
    // }
    // str += '\n';
    // for(i = 0; i < beverage.length; i++){
    //     str += 'My ' + (i+1) + switchSuffix(i + 1) + ' choice is ' + beverage[i];
    //     if(i !== beverage.length - 1){
    //         str += ', '
    //     }
    // }
    // str += '\n';
    // for(i = 0; i < colors.length; i++){
    //     str += 'My ' + (i+1) + switchSuffix(i + 1) + ' choice is ' + colors[i];
    //     if(i !== colors.length - 1){
    //         str += ', '
    //     }
    // }
    
    // console.log(str);
  }
}
