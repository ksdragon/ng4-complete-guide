import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingService } from '../shopping-list/shopping.service';
@Injectable()
export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();

    constructor(private serviceSL: ShoppingService){

    }
    private recipes: Recipe[] = [
        new Recipe(
            'testRecipe1',
            'This is a test1',
            'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg',
            [new Ingredient('meat', 1),
            new Ingredient('French Fries', 20)
            ]),

        new Recipe(
            'testRecipe2',
            'This is a test2',
            'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg',
            [new Ingredient('Buns', 2),
            new Ingredient('French Fries', 20)
            ]
        )
    ];

    addIngredientsToSL(ingridients: Ingredient[]){
        this.serviceSL.addIngredients(ingridients);
        // console.log('RecipeService:  ' + ingridients);
    }

    getRecipes() {
        return this.recipes.slice();
    }

}
