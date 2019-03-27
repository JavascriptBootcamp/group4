import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title:string = "pizza";
  servings:number = 13;
  ingredients:string[] = ["Water ","Sugar","Salt","Olive oil","Flour"];

 
 ngOnInit(){
   

 }
}
