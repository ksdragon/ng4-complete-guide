import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { RecipesComponent } from './recipes.component';
import { AuthGuardService } from '../auth/auth.guard.service';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipesResolverService } from './recipes-resolver.service';

const routes: Routes = [
    { path: '', component: RecipesComponent,
    canActivate: [AuthGuardService],            // dodajemy strażnika do ścieżki
    children: [
    { path: '' , component: RecipeStartComponent},
    { path: 'new' , component: RecipeEditComponent},
    { path: ':id' , component: RecipeDetailComponent, resolve: [RecipesResolverService]},
    { path: ':id/edit' , component: RecipeEditComponent,  resolve: [RecipesResolverService]}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipesRoutingModule {

}