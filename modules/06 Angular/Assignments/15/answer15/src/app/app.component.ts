import { Component , OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  pictures:string[];
  constructor(){
    this.pictures=[];
  }
  ngOnInit(){
    this.insertImagesToArray(20);
  }

  insertImagesToArray(amount:number){
    for(let i=10; i<amount+10;i++){
      this.pictures.push(`https://picsum.photos/300/200?image=${i}`);
    }
  }
}
