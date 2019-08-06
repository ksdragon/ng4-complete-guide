import { CommonModule } from '@angular/common';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { PlaceholderDirective } from './placeholder/placeholder.derective';
import { AlertComponent } from './alert/alert.component';
import { DropdownDirective } from './dropdown.derective';
import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    DropdownDirective,
    AlertComponent,
    PlaceholderDirective,
    LoadingSpinnerComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DropdownDirective,
    AlertComponent,
    PlaceholderDirective,
    LoadingSpinnerComponent,
    CommonModule
  ]
})
export class SharedModule {}
