import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';

export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('testRecipe1','This is a test1', 'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg'),
        new Recipe('testRecipe2','This is a test2', 'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg')
      ];

    getRecipes(){
        return this.recipes.slice();
    }
    
}