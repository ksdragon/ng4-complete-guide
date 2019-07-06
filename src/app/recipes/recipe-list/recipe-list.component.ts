import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  
  recipes: Recipe[];

  // @Output() itemWasSelected = new EventEmitter<Recipe>();

  // onRecipeSelected(item: Recipe){
  //   this.itemWasSelected.emit(item);
  // }
  
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

}
