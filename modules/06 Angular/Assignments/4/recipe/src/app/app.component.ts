import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

interface Irecipe{
  title : string,
  servings : number
  ingredients : string[]
}

export class AppComponent {
  
 public recipe:Irecipe

 constructor(){
this.recipe.title = "pizza";
this.recipe.servings = 13
this.recipe.ingredients = ["water ","sugar","salt","salt","olive oil","flour"]
 }

switching(recipe:Irecipe):any{
  for( let key in recipe )
  {
      switch (key)
      {
        case "servings":
          return "Serves: "+ recipe[key];
          break;
        case "ingredients":
         for(let item of recipe.ingredients)
          {
            return item;
              
          }
          break;
          default:
          console.log(recipe[key]);
      }
  }
}
}
