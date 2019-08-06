import { Ingredient } from '../../shared/ingredient.model';
import { Action } from '@ngrx/store';
// pobieramy stałą z pliku shopping-list.actions.ts
import { ADD_INGREDIENT } from './shopping-list.actions';

// initial state declaration
const initialState = {
  ingredients: [
    new Ingredient('Appels', 2),
    new Ingredient('Tomatoes', 4)
  ]
};
// initial value
export function shoppingListReducer(state = initialState, action: Action) {
  switch (action.type) {
    case ADD_INGREDIENT:  // wykorzystanie stałej
      return {
        // zawsze trzeba kopiować stare dane poprzedni stan, ponieważ taka jest zasada reduxa że mamy przechowyć stan aktualy i poprzedni.
        ...state, // new function on javascrip i typescript which copy old data; // kopiujemy stare dane
        // nowy stan, w naszy przypadku również narazie skopiujemy
        ingredients:  [ ...state.ingredients, action]

      };
  }
}
