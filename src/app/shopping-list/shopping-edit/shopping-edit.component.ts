import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingService } from '../shopping.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  @ViewChild('f', {static: false}) slForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }


  onSubmit(form: NgForm){
    const value = form.value;
    const newIngridient = new Ingredient(value.name, value.amount);
    if (this.editMode){
      this.serviceShoppingList.updateIngredient(this.editedItemIndex, newIngridient);
    } else {
      this.serviceShoppingList.addIngredient(newIngridient);
    }
    this.editMode = false;
    form.reset();

  }

  onClear(){
    this.editMode = false;
    this.slForm.reset();
  }

  onDelete() {
    this.serviceShoppingList.deleteIngredient(this.editedItemIndex);
    this.onClear();
  }

  constructor(private serviceShoppingList: ShoppingService) { }

  ngOnInit() {
    this.subscription = this.serviceShoppingList.startedEditingItem.subscribe(
      (index: number) => {
        this.editedItemIndex = index;
        this.editMode = true;
        this.editedItem = this.serviceShoppingList.getIngredient(index);
        this.slForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        });
      }
    )
  }

}
