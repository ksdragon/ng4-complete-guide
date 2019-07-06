import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingService {

    private ingredients: Ingredient[] = [
        new Ingredient('Appels', 2),
        new Ingredient('Tomatoes', 4)
      ];

      ingredentsChanded = new EventEmitter<Ingredient[]>();

      getIngredients(){
          // copy orginal array
          return this.ingredients.slice();
      }

      addIngredient(ingredient: Ingredient){
        this.ingredients.push(ingredient);
        this.ingredentsChanded.emit(this.ingredients);
      }

}