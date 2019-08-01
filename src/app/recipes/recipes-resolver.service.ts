import { RecipeService } from './recipe.service';
import { DataStorageService } from './../shared/data-storage.service';
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Recipe } from './recipe.model';

@Injectable({providedIn: 'root'})
export class RecipesResolverService implements Resolve<Recipe[]> {

  constructor(private dataStorageService: DataStorageService,
              private recipeService: RecipeService) {}

  resolve(route: import ('@angular/router').ActivatedRouteSnapshot,
          state: import ('@angular/router').RouterStateSnapshot) {
            const recipies = this.recipeService.getRecipes();
            if (recipies.length === 0) {
              return this.dataStorageService.fetchRecipes();
            } else {
              return recipies;
            }

}
}
