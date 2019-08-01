import { RecipeService } from './../recipes/recipe.service';
import { Recipe } from './../recipes/recipe.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';


@Injectable({ providedIn: 'root'})
export class DataStorageService {
  constructor(private http: HttpClient,
              private recipeService: RecipeService) {}

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    this.http.put('https://ng-course-recipe-book-9b934.firebaseio.com/recipes.json', recipes).subscribe(
      (response => {
        console.log(response);
      })
    );
  }

  fetchRecipes() {
    return this.http.get<Recipe []>('https://ng-course-recipe-book-9b934.firebaseio.com/recipes.json')
    // funkcja map z biblioteki rxjs jest operatorem który pozwala na zmianę odpowiedzi z serwera
    .pipe(map(
      recipes => {
        // tu funkcja map pozwala na zmiany w tablicy.
        return recipes.map(recipe => {
          // '...' - spread operatorjest (to kopia wszystkich właściwości recipe) i zmiana jednej włąściowści.
          return { ...recipe, ingredients: recipe.ingredients ? recipe.ingredients : []};
        });
      }
    ), tap(
      (response) => {this.recipeService.setRecipes(response); }
    ));
  }
}
