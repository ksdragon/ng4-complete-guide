import { Params } from '@angular/router';
import { AuthService } from './../auth/auth.service';
import { RecipeService } from './../recipes/recipe.service';
import { Recipe } from './../recipes/recipe.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, tap, take, exhaustMap } from 'rxjs/operators';


@Injectable({ providedIn: 'root'})
export class DataStorageService {
  constructor(private http: HttpClient,
              private recipeService: RecipeService,
              private authService: AuthService) {}

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    this.http.put('https://ng-course-recipe-book-9b934.firebaseio.com/recipes.json', recipes).subscribe(
      (response => {
        console.log(response);
      })
    );
  }

  fetchRecipes() {
    // jeden ze sposobów autoryzacji zapytań do serwera i dodawania tokena do zapytania.
    // tutaj całą robotę robi interceptor.
    return this.http.get<Recipe []>('https://ng-course-recipe-book-9b934.firebaseio.com/recipes.json')
    .pipe(
    // funkcja map z biblioteki rxjs jest operatorem który pozwala na zmianę odpowiedzi z serwera
    map(
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



  fetchRecipes1() {
    // jeden ze sposobów autoryzacji zapytań do serwera i dodawania tokena do zapytania.
    // metoda pipe przyjmuje operatory takie jak map tap take exhaustMap
    // take - bierze tylko jedną wartość i automatycznie jest unsubscribe
    // exhaustMap - pozwala na wykonanie pierwszego observable czyli user i
    // przekazanie go do funkcji exhaustMap i wykorzystanie poprzedniego observable.
    // w naszym przypadku user jest przkazany i wykorzystana watrośc token
   return this.authService.user.pipe(take(1), exhaustMap(user => {
      return this.http.get<Recipe []>('https://ng-course-recipe-book-9b934.firebaseio.com/recipes.json',
        {
          params: new HttpParams().set('auth', user.token) // dodajemy parametr do zapytania zgodnie z dokumentacją
        }
      );
    }),
    // funkcja map z biblioteki rxjs jest operatorem który pozwala na zmianę odpowiedzi z serwera
    map(
      recipes => {
        // tu funkcja map pozwala na zmiany w tablicy.
        return recipes.map(recipe => {
          // '...' - spread operatorjest (to kopia wszystkich właściwości recipe) i zmiana jednej włąściowści.
          // jest to robione w celu dodania pustego obiektu ingredients bo inaczej byłby błąd.
          return { ...recipe, ingredients: recipe.ingredients ? recipe.ingredients : []};
        });
      }
    ), tap(
      (response) => {this.recipeService.setRecipes(response); } // zapisuje zmieniony obiekt.
    ));
  }
}
