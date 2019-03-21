import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'answer6415';
  recipe;
  printRecipe;
  constructor() {
    this.printRecipe='';
    this.recipe = {
      title: "pizza",
      servings: 13,
      ingredients: ["water ", "sugar", "salt", "salt", "olive oil", "flour"]

    }
  }
  ngOnInit() {

    for (let key in this.recipe) {

      switch (key) {
        
        case "servings":
          this.printRecipe +=  'Serves: '+this.recipe[key]+ '<br/>';
          break;
        case "ingredients":
          this.printRecipe += `key: ${this.recipe[key]} <br/>          `

          this.recipe.ingredients.forEach(function (item) {
            console.log(item);
            this.printRecipe += ` ${item}`

          });
          break;
        default:
        this.printRecipe += `${this.recipe[key]} <br/>`


      }


    }
  }


}
