import { Component, OnInit,Input } from '@angular/core';
import {Recipe} from '../recipe.module'
@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  @Input() recipe:Recipe;

  constructor() {


   }

  ngOnInit() {
  }

}
