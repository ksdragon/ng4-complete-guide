import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

export class ShoppingService {

    private ingredients: Ingredient[] = [
        new Ingredient('Appels', 2),
        new Ingredient('Tomatoes', 4)
      ];

      ingredentsChanded = new Subject<Ingredient[]>();

      getIngredients(){
          // copy orginal array
          return this.ingredients.slice();
      }

      addIngredient(ingredient: Ingredient){
        this.ingredients.push(ingredient);
        this.ingredentsChanded.next(this.ingredients.slice());
        console.log(this.ingredients);
        console.log(this.ingredentsChanded);
      }

      addIngredients(ingredientsNew: Ingredient[]){
        // ingredientsNew.forEach(el => {
        //   this.ingredients.push(el);
        //   console.log(this.ingredients);
        // });
        this.ingredients.push(...ingredientsNew);
        this.ingredentsChanded.next(this.ingredients.slice());
      }

}
