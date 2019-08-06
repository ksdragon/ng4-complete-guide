import { Ingredient } from 'src/app/shared/ingredient.model';
import { Action } from '@ngrx/store';

export const ADD_INGREDIENT = 'ADD_INGREDIENT';  // tworzemy stałe żeby sie nie pomylić w litrówkach później.


export class AddIngredient implements Action {
  // typesctipt futhure, nie może być zmienione z zewnątrz.
  readonly type = ADD_INGREDIENT;
  payload: Ingredient;
}
