import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';



const appRoutes: Routes = [
  // { path: '', component: RecipesComponent },
  { path: '', redirectTo: '/recipes', pathMatch: 'full'},
  { path: 'recipes', loadChildren: './recipes/recipes.module#RecipesModule'},
  { path: 'shoppingList', loadChildren: './shopping-list/shopping-list.module#ShoppingListModule'},
  { path: 'auth', loadChildren: './auth/auth.module#AuthModule'},
  { path: 'not-found', component: PageNotFoundComponent},
  { path: '**', redirectTo: '/not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
