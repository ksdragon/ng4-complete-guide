import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('testRecipe1','This is a test1', 'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg'),
    new Recipe('testRecipe2','This is a test2', 'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg')
  ];
  @Output() itemWasSelected = new EventEmitter<Recipe>();

  onRecipeSelected(item: Recipe){
    this.itemWasSelected.emit(item);
  }
  constructor() { }

  ngOnInit() {
  }

}
