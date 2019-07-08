import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipeDetail : Recipe;
  constructor(private serviceRecipe: RecipeService) {
   }

   addIngredientsToSL(){
      this.serviceRecipe.addIngredientsToSL(this.recipeDetail.ingredients);
      // console.log(this.recipeDetail.ingredients);
   }


  ngOnInit() {
  }

}
