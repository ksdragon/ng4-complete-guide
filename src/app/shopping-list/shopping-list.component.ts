import { Component, OnInit, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingService } from './shopping.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers: [ShoppingService]
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];

  constructor(private serviceShoppingList: ShoppingService) { }
  
  ngOnInit() {
    this.ingredients = this.serviceShoppingList.getIngredients();
       
    this.serviceShoppingList.ingredentsChanded.subscribe((ing:Ingredient[]) => {
      this.ingredients = ing;
    });
  }

}
