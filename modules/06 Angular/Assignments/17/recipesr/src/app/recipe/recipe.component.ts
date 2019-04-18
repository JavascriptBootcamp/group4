import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { recipeObj } from '../recipes';
import { recipesArr } from '../recipes';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})

export class RecipeComponent implements OnInit {
  @Input() recipe: recipeObj;
  link: string;
  recpiesA: recipeObj[];
  recipeLink: string;
  img:string;
  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute = activatedRoute;
    this.recipeLink = this.activatedRoute.snapshot.params.id;
    // console.log(this.activatedRoute.snapshot.paramMap.get('id'));
  }
  ngOnInit() {
    this.recpiesA = recipesArr;
    if (!this.recipe) {
      for (let item of this.recpiesA) {
        if (item.name==this.recipeLink){
          this.recipe=item;
          break;
        }
      }
    }
    this.rating();
  }

  rating(){
    if (this.recipe.rating==3)
    this.img="http://makgabenglodge.co.za/wp-content/uploads/2019/02/3-stars.png";
    if (this.recipe.rating==4)
    this.img="https://www.jasonderusha.net/wp-content/uploads/2014/07/4stars-e1406551722909.png";
  }
}
