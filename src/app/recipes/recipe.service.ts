import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingService } from '../shopping-list/shopping.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {

    // recipeSelected = new Subject<Recipe>();
    recipesChanged = new Subject<Recipe[]>();

    constructor(private serviceSL: ShoppingService) {

    }
    // private recipes: Recipe[] = [
    //     new Recipe(
    //         // 0,
    //         'testRecipe1',
    //         'This is a test1',
    //         'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg',
    //         [new Ingredient('meat', 1),
    //         new Ingredient('French Fries', 20)
    //         ]),

    //     new Recipe(
    //         // 1,
    //         'testRecipe2',
    //         'This is a test2',
    //         'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg',
    //         [new Ingredient('Buns', 2),
    //         new Ingredient('French Fries', 20)
    //         ]
    //     )
    // ];
    private recipes: Recipe[] = [];

    setRecipes(resipes: Recipe[]) {
      this.recipes = resipes;
      this.recipesChanged.next(this.recipes.slice());
    }

    addIngredientsToSL(ingridients: Ingredient[]) {
        this.serviceSL.addIngredients(ingridients);
        // console.log('RecipeService:  ' + ingridients);
    }

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index: number) {
      return this.recipes.slice()[index];
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }

}
