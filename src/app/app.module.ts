import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core.module';
import { SharedModule } from './shared/shared.module';
import { AlertComponent } from './shared/alert/alert.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { RecipesModule } from './recipes/recipes.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RecipesModule,
    ShoppingListModule,
    SharedModule,
    CoreModule,
    AuthModule
  ],
  // ustawiamy przechwytywacz zapytań do serwera
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AlertComponent]
})
export class AppModule { }
