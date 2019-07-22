import { Component, OnInit, EventEmitter, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingService } from './shopping.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']

})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  private subscription: Subscription;

  constructor(private serviceShoppingList: ShoppingService) {
    this.ingredients = this.serviceShoppingList.getIngredients();
   }

  ngOnInit() {

    this.subscription = this.serviceShoppingList.ingredentsChanded.subscribe((ing: Ingredient[]) => {
      this.ingredients = ing;
    });

  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
