import { Component, OnInit, Input,EventEmitter, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  // wysyłamy zdarzenie do rodzica wyżej.
  @Output() selectedItem = new EventEmitter<void>();
  constructor() { }
  
  // click w szablonie
  onSelectItem(){
    this.selectedItem.emit();
  }

  ngOnInit() {
  }

}
