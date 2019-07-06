import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingService } from '../shopping.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput', {static : true}) nameInputRef: ElementRef;
  @ViewChild('amountInput', {static : true}) amountInputRef: ElementRef;
  
  // @Output() ingredientAdded = new EventEmitter<Ingredient>();
  onAddItem(){
    const newIngridient = new Ingredient(this.nameInputRef.nativeElement.value
                                      , this.amountInputRef.nativeElement.value);
    this.serviceShoppingList.addIngredient(newIngridient);  
    // this.ingredientAdded.emit(newIngridient);
  }
  constructor(private serviceShoppingList: ShoppingService) { }

  ngOnInit() {
  }

}
