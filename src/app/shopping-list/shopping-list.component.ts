import { Ingredient } from './../shared/ingredient.model';
import { Component, OnInit, EventEmitter, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingService } from './shopping.service';
import { Subscription, Observable } from 'rxjs';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']

})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Observable<{ingredients: Ingredient[]}> ;
  private subscription: Subscription;

  constructor(private serviceShoppingList: ShoppingService,
              private store: Store<{shoppingList: {ingredients: Ingredient[]}}>) {
    // this.ingredients = this.serviceShoppingList.getIngredients();
   }

  ngOnInit() {
    this.ingredients = this.store.select('shoppingList');
    // this.subscription = this.serviceShoppingList.ingredentsChanded.subscribe((ing: Ingredient[]) => {
    //   this.ingredients = ing; });
  }

  onEditItem(index: number) {
    this.serviceShoppingList.startedEditingItem.next(index);
  }

  ngOnDestroy(): void {
    // this.subscription.unsubscribe();
  }

}
