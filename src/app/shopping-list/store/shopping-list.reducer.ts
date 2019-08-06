import { Ingredient } from '../../shared/ingredient.model';
// pobieramy stałą z pliku shopping-list.actions.ts
// import { ADD_INGREDIENT } from './shopping-list.actions';

// pobieramy wszystko, umożliwia korzystani z tego jak z obiektu.
import * as ShoppingListActions from './shopping-list.actions';

// initial state declaration
const initialState = {
  ingredients: [
    new Ingredient('Appels', 2),
    new Ingredient('Tomatoes', 4)
  ]
};
// initial value state = initialState oraz w kolejnuych krokach dodajemy sprecyzowany typ do action: ShoppingListActions.AddIngredient
// z naszego obiektu który zaimportowaliśmy z pliku shopping-list.actions.ts
export function shoppingListReducer(state = initialState, action: ShoppingListActions.AddIngredient) {
  switch (action.type) {
    case ShoppingListActions.ADD_INGREDIENT:  // wykorzystanie stałej
      return {
        // zawsze trzeba kopiować stare dane poprzedni stan, ponieważ taka jest zasada reduxa że mamy przechowyć stan aktualy i poprzedni.
        ...state, // new function on javascrip i typescript which copy old data; // kopiujemy stare dane
        // nowy stan, w naszy przypadku również narazie skopiujemy
        ingredients:  [ ...state.ingredients, action.payload] // payload type Ingredient

      };
      default:
        return state;
  }
}
