import { Component } from '@angular/core';

interface Irecipe{
  title : string,
  servings : number,
  ingredients : string[]
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{
  
public recipe:Irecipe;

constructor(){
this.recipe = {
title : "pizza",
servings : 13,
ingredients : ["water ","sugar","salt","salt","olive oil","flour"]
}  

}

}
